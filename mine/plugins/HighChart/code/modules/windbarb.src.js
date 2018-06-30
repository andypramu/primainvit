/**
 * @license  Highcharts JS v6.0.3 (2017-11-14)
 * Wind barb series module
 *
 * (c) 2010-2017 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        factory(Highcharts);
    }
}(function(Highcharts) {
    var onSeriesMixin = (function(H) {
        /**
         * (c) 2010-2017 Torstein Honsi
         *
         * License: www.highcharts.com/license
         */

        var each = H.each,
            seriesTypes = H.seriesTypes,
            stableSort = H.stableSort;

        var onSeriesMixin = {
            /**
             * Extend the translate method by placing the point on the related series
             */
            translate: function() {

                seriesTypes.column.prototype.translate.apply(this);

                var series = this,
                    options = series.options,
                    chart = series.chart,
                    points = series.points,
                    cursor = points.length - 1,
                    point,
                    lastPoint,
                    optionsOnSeries = options.onSeries,
                    onSeries = optionsOnSeries && chart.get(optionsOnSeries),
                    onKey = options.onKey || 'y',
                    step = onSeries && onSeries.options.step,
                    onData = onSeries && onSeries.points,
                    i = onData && onData.length,
                    xAxis = series.xAxis,
                    yAxis = series.yAxis,
                    xAxisExt = xAxis.getExtremes(),
                    xOffset = 0,
                    leftPoint,
                    lastX,
                    rightPoint,
                    currentDataGrouping;

                // relate to a master series
                if (onSeries && onSeries.visible && i) {
                    xOffset = (onSeries.pointXOffset || 0) + (onSeries.barW || 0) / 2;
                    currentDataGrouping = onSeries.currentDataGrouping;
                    lastX = (
                        onData[i - 1].x +
                        (currentDataGrouping ? currentDataGrouping.totalRange : 0)
                    ); // #2374

                    // sort the data points
                    stableSort(points, function(a, b) {
                        return (a.x - b.x);
                    });

                    onKey = 'plot' + onKey[0].toUpperCase() + onKey.substr(1);
                    while (i-- && points[cursor]) {
                        point = points[cursor];
                        leftPoint = onData[i];
                        if (leftPoint.x <= point.x && leftPoint[onKey] !== undefined) {
                            if (point.x <= lastX) { // #803

                                point.plotY = leftPoint[onKey];

                                // interpolate between points, #666
                                if (leftPoint.x < point.x && !step) {
                                    rightPoint = onData[i + 1];
                                    if (rightPoint && rightPoint[onKey] !== undefined) {
                                        point.plotY +=
                                            // the distance ratio, between 0 and 1
                                            (
                                                (point.x - leftPoint.x) /
                                                (rightPoint.x - leftPoint.x)
                                            ) *
                                            // the y distance
                                            (rightPoint[onKey] - leftPoint[onKey]);
                                    }
                                }
                            }
                            cursor--;
                            i++; // check again for points in the same x position
                            if (cursor < 0) {
                                break;
                            }
                        }
                    }
                }

                // Add plotY position and handle stacking
                each(points, function(point, i) {

                    var stackIndex;

                    // Undefined plotY means the point is either on axis, outside series
                    // range or hidden series. If the series is outside the range of the
                    // x axis it should fall through with an undefined plotY, but then
                    // we must remove the shapeArgs (#847).
                    if (point.plotY === undefined) {
                        if (point.x >= xAxisExt.min && point.x <= xAxisExt.max) {
                            // we're inside xAxis range
                            point.plotY = chart.chartHeight - xAxis.bottom -
                                (xAxis.opposite ? xAxis.height : 0) +
                                xAxis.offset - yAxis.top; // #3517
                        } else {
                            point.shapeArgs = {}; // 847
                        }
                    }
                    point.plotX += xOffset; // #2049
                    // if multiple flags appear at the same x, order them into a stack
                    lastPoint = points[i - 1];
                    if (lastPoint && lastPoint.plotX === point.plotX) {
                        if (lastPoint.stackIndex === undefined) {
                            lastPoint.stackIndex = 0;
                        }
                        stackIndex = lastPoint.stackIndex + 1;
                    }
                    point.stackIndex = stackIndex; // #3639
                });


            }
        };
        return onSeriesMixin;
    }(Highcharts));
    (function(H, onSeriesMixin) {
        /**
         * Wind barb series module
         *
         * (c) 2010-2017 Torstein Honsi
         *
         * License: www.highcharts.com/license
         */

        var each = H.each,
            seriesType = H.seriesType;

        /**
         * Wind barbs are a convenient way to represent wind speed and direction in one
         * graphical form. Wind direction is given by the stem direction, and wind speed
         * by the number and shape of barbs.  
         * 
         * @extends {plotOptions.column}
         * @excluding boostThreshold,marker,connectEnds,connectNulls,cropThreshold,
         *            dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,
         *            step
         * @product highcharts highstock
         * @sample {highcharts|highstock} highcharts/demo/windbarb-series/
         *         Wind barb series
         * @since 6.0.0
         * @optionparent plotOptions.windbarb
         */
        seriesType('windbarb', 'column', {
            /**
             * The line width of the wind barb symbols.
             */
            lineWidth: 2,
            /**
             * The id of another series in the chart that the wind barbs are projected
             * on. When `null`, the wind symbols are drawn on the X axis, but offset
             * up or down by the `yOffset` setting.
             * 
             * @sample {highcharts|highstock} highcharts/plotoptions/windbarb-onseries
             *         Projected on area series
             * @type {String|null}
             */
            onSeries: null,
            states: {
                hover: {
                    lineWidthPlus: 0
                }
            },
            tooltip: {
                /**
                 * The default point format for the wind barb tooltip. Note the 
                 * `point.beaufort` property that refers to the Beaufort wind scale. The
                 * names can be internationalized by modifying
                 * `Highcharts.seriesTypes.windbarb.prototype.beaufortNames`.
                 */
                pointFormat: '<b>{series.name}</b>: {point.value} ({point.beaufort})<br/>'
            },
            /**
             *                        }
                        }
                    }
                }

                // Add plotY position and handle stacking
                each(points, function(point, i) {

                    var stackIndex;

                    // Undefined plotY means the point is either on axis, outside series
                    // range or hidden series. If the series is outside the range of the
                    // x axis it should fall through with an undefined plotY, but then
                    // we must remove the shapeArgs (#847).
                    if (point.plotY === undefined) {
                        if (point.x >= xAxisExt.min && point.x <= xAxisExt.max) {
                            // we're inside xAxis range
                            point.plotY = chart.chartHeight - xAxis.bottom -
                                (xAxis.opposite ? xAxis.height : 0) +
                                xAxis.offset - yAxis.top; // #3517
                        } else {
                            point.shapeArgs = {}; // 847
                        }
                    }
                    point.plotX += xOffset; // #2049
                    // if multiple flags appear at the same x, order them into a stack
                    lastPoint = points[i - 1];
                    if (lastPoint && lastPoint.plotX === point.plotX) {
                        if (lastPoint.stackIndex === undefined) {
                            lastPoint.stackIndex = 0;
                        }
                        stackIndex = lastPoint.stackIndex + 1;
                    }
                    point.stackIndex = stackIndex; // #3639
                });


            }
        };
        return onSeriesMixin;
    }(Highcharts));
    (function(H, onSeriesMixin) {
        /**
         * Wind barb series module
         *
         * (c) 2010-2017 Torstein Honsi
         *
         * License: www.highcharts.com/license
         */

        var each = H.each,
            seriesType = H.seriesType;

        /**
         * Wind barbs are a convenient way to represent wind speed and direction in one
         * graphical form. Wind direction is given by the stem direction, and wind speed
         * by the number and shape of barbs.  
         * 
         * @extends {plotOptions.column}
         * @excluding boostThreshold,marker,connectEnds,connectNulls,cropThreshold,
         *            dashStyle,gapSize,gapUnit,dataGrouping,linecap,shadow,stacking,
         *            step
         * @product highcharts highstock
         * @sample {highcharts|highstock} highcharts/demo/windbarb-series/
         *         Wind barb series
         * @since 6.0.0
         * @optionparent plotOptions.windbarb
         */
        seriesType('windbarb', 'column', {
            /**
             * The line width of the wind barb symbols.
             */
            lineWidth: 2,
            /**
             * The id of another series in the chart that the wind barbs are projected
             * on. When `null`, the wind symbols are drawn on the X axis, but offset
             * up or down by the `yOffset` setting.
             * 
             * @sample {highcharts|highstock} highcharts/plotoptions/windbarb-onseries
             *         Projected on area series
             * @type {String|null}
             */
            onSeries: null,
            states: {
                hover: {
                    lineWidthPlus: 0
                }
            },
            tooltip: {
                /**
                 * The default point format for the wind barb tooltip. Note the 
                 * `point.beaufort` property that refers to the Beaufort wind scale. The
                 * names can be internationalized by modifying
                 * `Highcharts.seriesTypes.windbarb.prototype.beaufortNames`.
                 */
                pointFormat: '<b>{series.name}</b>: {point.value} ({point.beaufort})<br/>'
            },
            /**
             * Pixel length of the stems.
             */
            vectorLength: 20,
            /**
             * Vertical offset from the cartesian position, in pixels. The default value
             * makes sure the symbols don't overlap the X axis when `onSeries` is
             * `null`, and that they don't overlap the linked series when `onSeries` is
             * given.
             */
            yOffset: -20
        }, {
            pointArrayMap: ['value', 'direction'],
            parallelArrays: ['x', 'value', 'direction'],
            beaufortName: ['Calm', 'Light air', 'Light breeze',
                'Gentle breeze', 'Moderate breeze', 'Fresh breeze',
                'Strong breeze', 'Near gale', 'Gale', 'Strong gale', 'Storm',
                'Violent storm', 'Hurricane'
            ],
            beaufortFloor: [0, 0.3, 1.6, 3.4, 5.5, 8.0, 10.8, 13.9, 17.2, 20.8,
                24.5, 28.5, 32.7
            ],
            trackerGroups: ['markerGroup'],

            /**
             * Get presentational attributes.
             */
            pointAttribs: function(point, state) {
                var options = this.options,
                    stroke = this.color,
                    strokeWidth = this.options.lineWidth;

                if (state) {
                    stroke = options.states[state].color || stroke;
                    strokeWidth =
                        (options.states[state].lineWidth || strokeWidth) +
                        (options.states[state].lineWidthPlus || 0);
                }

                return {
                    'stroke': stroke,
                    'stroke-width': strokeWidth
                };
            },
            markerAttribs: function() {
                return undefined;
            },
            /**
             * Create a single wind arrow. It is later rotated around the zero
             * centerpoint.
             */
            windArrow: function(point) {
                var knots = point.value * 1.943844,
                    level = point.beaufortLevel,
                    path,
                    barbs,
                    u = this.options.vectorLength / 20,
                    pos = -10;

                if (point.isNull) {
                    return [];
                }

                if (level === 0) {
                    return this.chart.renderer.symbols.circle(-10 * u, -10 * u,
                        20 * u,
                        20 * u
                    );
                }

                // The stem and the arrow head
                path = [
                    'M', 0, 7 * u, // base of arrow
                    'L', -1.5 * u, 7 * u,
                    0, 10 * u,
                    1.5 * u, 7 * u,
                    0, 7 * u,
                    0, -10 * u // top
                ];

                // For each full 50 knots, add a pennant
                barbs = (knots - knots % 50) / 50; // pennants
                if (barbs > 0) {
                    while (barbs--) {
                        path.push(
                            pos === -10 ? 'L' : 'M',
                            0,
                            pos * u,
                            'L',
                            5 * u,
                            pos * u + 2,
                            'L',
                            0,
                            pos * u + 4

                        );

                        // Substract from the rest and move position for next
                        knots -= 50;
                        pos += 7;
                    }
                }

                // For each full 10 knots, add a full barb
                barbs = (knots - knots % 10) / 10;
                if (barbs > 0) {
                    while (barbs--) {
                        path.push(
                            pos === -10 ? 'L' : 'M',
                            0,
                            pos * u,
                            'L',
                            7 * u,
                            pos * u
                        );
                        knots -= 10;
                        pos += 3;
                    }
                }

                // For each full 5 knots, add a half barb
                barbs = (knots - knots % 5) / 5; // half barbs
                if (barbs > 0) {
                    while (barbs--) {
                        path.push(
                            pos === -10 ? 'L' : 'M',
                            0,
                            pos * u,
                            'L',
                            4 * u,
                            pos * u
                        );
                        knots -= 5;
                        pos += 3;
                    }
                }
                return path;
            },

            translate: function() {
                var beaufortFloor = this.beaufortFloor,
                    beaufortName = this.beaufortName;

                onSeriesMixin.translate.call(this);

                each(this.points, function(point) {
                    var level = 0;
                    // Find the beaufort level (zero based)
                    for (; level < beaufortFloor.length; level++) {
                        if (beaufortFloor[level] > point.value) {
                            break;
                        }
                    }
                    point.beaufortLevel = level - 1;
                    point.beaufort = beaufortName[level - 1];

                });

            },

            drawPoints: function() {
                var chart = this.chart,
                    yAxis = this.yAxis;
                each(this.points, function(point) {
                    var plotX = point.plotX,
                        plotY = point.plotY;
                    if (!point.graphic) {
                        point.graphic = this.chart.renderer
                            .path()
                            .add(this.markerGroup);
                    }
                    point.graphic
                        .attr({
                            d: this.windArrow(point),
                            translateX: plotX,
                            translateY: plotY + this.options.yOffset,
                            rotation: point.direction
                        })
                        .attr(this.pointAttribs(point));

                    // Set the tooltip anchor position
                    point.tooltipPos = chart.inverted ? [
                        yAxis.len + yAxis.pos - chart.plotLeft - plotY,
                        this.xAxis.len - plotX
                    ] : [
          