/*
 Highcharts JS v6.0.3 (2017-11-14)
 Accessibility module

 (c) 2010-2017 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(d){function n(a){return a.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;").replace(/"/g,"\x26quot;").replace(/'/g,"\x26#x27;").replace(/\//g,"\x26#x2F;")}function y(a){return"string"===typeof a?a.replace(/<\/?[^>]+(>|$)/g,""):a}function q(a){for(var c=a.childNodes.length;c--;)a.appendChild(a.childNodes[c])}var m=d.win.document,l=d.each,u=d.erase,k=d.addEvent,z=d.dateFormat,
v=d.merge,A={position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},t={"default":["series","data point","data points"],line:["line","data point","data points"],spline:["line","data point","data points"],area:["line","data point","data points"],areaspline:["line","data point","data points"],pie:["pie","slice","slices"],column:["column series","column","columns"],bar:["bar series","bar","bars"],scatter:["scatter series","data point","data points"],boxplot:["boxplot series",
"box","boxes"],arearange:["arearange series","data point","data points"],areasplinerange:["areasplinerange series","data point","data points"],bubble:["bubble series","bubble","bubbles"],columnrange:["columnrange series","column","columns"],errorbar:["errorbar series","errorbar","errorbars"],funnel:["funnel","data point","data points"],pyramid:["pyramid","data point","data points"],waterfall:["waterfall series","column","columns"],map:["map","area","areas"],mapline:["line","data point","data points"],
mappoint:["point series","data point","data points"],mapbubble:["bubble series","bubble","bubbles"]},b={boxplot:" Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile and maximum. ",arearange:" Arearange charts are line charts displaying a range between a lower and higher value for each point. ",areasplinerange:" These charts are line charts displaying a range between a lower and higher value for each point. ",
bubble:" Bubble charts are scatter charts where each data point also has a size value. ",columnrange:" Columnrange charts are column charts displaying a range between a lower and higher value for each point. ",errorbar:" Errorbar series are used to display the variability of the data. ",funnel:" Funnel charts are used to display reduction of data in stages. ",pyramid:" Pyramid charts consist of a single pyramid with item heights corresponding to each point value. ",waterfall:" A waterfall chart is a column chart where each column contributes towards a total end value. "};
d.Series.prototype.commonKeys="name id category x value y".split(" ");d.Series.prototype.specialKeys="z open high q3 median q1 low close".split(" ");d.seriesTypes.pie&&(d.seriesTypes.pie.prototype.specialKeys=[]);d.setOptions({accessibility:{enabled:!0,pointDescriptionThreshold:30}});d.wrap(d.Series.prototype,"render",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));this.chart.options.accessibility.enabled&&this.setA11yDescription()});d.Series.prototype.setA11yDescription=function(){var a=
this.chart.options.accessibility,c=this.points&&this.points.length&&this.points[0].graphic&&this.points[0].graphic.element,b=c&&c.parentNode||this.graph&&this.graph.element||this.group&&this.group.element;b&&(b.lastChild===c&&q(b),this.points&&(this.points.length<a.pointDescriptionThreshold||!1===a.pointDescriptionThreshold)&&l(this.points,function(c){c.graphic&&(c.graphic.element.setAttribute("role","img"),c.graphic.element.setAttribute("tabindex","-1"),c.graphic.element.setAttribute("aria-label",
y(c.series.options.pointDescriptionFormatter&&c.series.options.pointDescriptionFormatter(c)||a.pointDescriptionFormatter&&a.pointDescriptionFormatter(c)||c.buildPointInfoString())))}),1<this.chart.series.length||a.describeSingleSeries)&&(b.setAttribute("role",this.options.exposeElementToA11y?"img":"region"),b.setAttribute("tabindex","-1"),b.setAttribute("aria-label",y(a.seriesDescriptionFormatter&&a.seriesDescriptionFormatter(this)||this.buildSeriesInfoString())))};d.Series.prototype.buildSeriesInfoString=
function(){var a=t[this.type]||t["default"],c=this.description||this.options.description;return(this.name?this.name+", ":"")+(1===this.chart.types.length?a[0]:"series")+" "+(this.index+1)+" of "+this.chart.series.length+(1===this.chart.types.length?" with ":". "+a[0]+" with ")+(this.points.length+" "+(1===this.points.length?a[1]:a[2]))+(c?". "+c:"")+(1<this.chart.yAxis.length&&this.yAxis?". Y axis, "+this.yAxis.getDescription():"")+(1<this.chart.xAxis.length&&this.xAxis?". X axis, "+this.xAxis.getDescription():
"")};d.Point.prototype.buildPointInfoString=function(){var a=this,c=a.series,b=c.chart.options.accessibility,g="",e=c.xAxis&&c.xAxis.isDatetimeAxis,b=e&&z(b.pointDateFormatter&&b.pointDateFormatter(a)||b.pointDateFormat||d.Tooltip.prototype.getXDateFormat(a,c.chart.options.tooltip,c.xAxis),a.x);d.find(c.specialKeys,function(c){return void 0!==a[c]})?(e&&(g=b),l(c.commonKeys.concat(c.specialKeys),function(c){void 0===a[c]||e&&"x"===c||(g+=(g?". ":"")+c+", "+a[c])})):g=(this.name||b||this.category||
this.id||"x, "+this.x)+", "+(void 0!==this.value?this.value:this.y);return this.index+1+". "+g+"."+(this.description?" "+this.description:"")};d.Axis.prototype.getDescription=function(){return this.userOptions&&this.userOptions.description||this.axisTitle&&this.axisTitle.textStr||this.options.id||this.categories&&"categories"||"values"};d.wrap(d.Series.prototype,"init",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));var c=this.chart;c.options.accessibility.enabled&&(c.types=c.types||
[],0>c.types.indexOf(this.type)&&c.types.push(this.type),k(this,"remove",function(){var a=this,b=!1;l(c.series,function(f){f!==a&&0>c.types.indexOf(a.type)&&(b=!0)});b||u(c.types,a.type)}))});d.Chart.prototype.getTypeDescription=function(){var a=this.types&&this.types[0],c=this.series[0]&&this.series[0].mapTitle;if(a){if("map"===a)return c?"Map of "+c:"Map of unspecified region.";if(1<this.types.length)return"Combination chart.";if(-1<["spline","area","areaspline"].indexOf(a))return"Line chart."}else return"Empty chart.";
return a+" chart."+(b[a]||"")};d.Chart.prototype.getAxesDescription=function(){var a=this.xAxis.length,c=this.yAxis.length,b={},d;if(a)if(b.xAxis="The chart has "+a+(1<a?" X axes":" X axis")+" displaying ",2>a)b.xAxis+=this.xAxis[0].getDescription()+".";else{for(d=0;d<a-1;++d)b.xAxis+=(d?", ":"")+this.xAxis[d].getDescription();b.xAxis+=" and "+this.xAxis[d].getDescription()+"."}if(c)if(b.yAxis="The chart has "+c+(1<c?" Y axes":" Y axis")+" displaying ",2>c)b.yAxis+=this.yAxis[0].getDescription()+
".";else{for(d=0;d<c-1;++d)b.yAxis+=(d?", ":"")+this.yAxis[d].getDescription();b.yAxis+=" and "+this.yAxis[d].getDescription()+"."}return b};d.Chart.prototype.addAccessibleContextMenuAttribs=function(){var a=this.exportDivElements;a&&(l(a,function(a){"DIV"!==a.tagName||a.children&&a.children.length||(a.setAttribute("role","menuitem"),a.setAttribute("tabindex",-1))}),a[0].parentNode.setAttribute("role","menu"),a[0].parentNode.setAttribute("aria-label","Chart export"))};d.Chart.prototype.addScreenReaderRegion=
function(a,c){var b=this,d=b.series,e=b.options,h=e.accessibility,w=b.screenReaderRegion=m.createElement("div"),l=m.createElement("h4"),k=m.createElement("a"),x=m.createElement("h4"),p=b.types||[],p=(1===p.length&&"pie"===p[0]||"map"===p[0])&&{}||b.getAxesDescription(),r=d[0]&&t[d[0].type]||t["default"];w.setAttribute("id",a);w.setAttribute("role","region");w.setAttribute("aria-label","Chart screen reader information.");w.innerHTML=h.screenReaderSectionFormatter&&h.screenReaderSectionFormatter(b)||
"\x3cdiv\x3eUse regions/landmarks to skip ahead to chart"+(1<d.length?" and navigate between data series":"")+".\x3c/div\x3e\x3ch3\x3e"+(e.title.text?n(e.title.text):"Chart")+(e.subtitle&&e.subtitle.text?". "+n(e.subtitle.text):"")+"\x3c/h3\x3e\x3ch4\x3eLong description.\x3c/h4\x3e\x3cdiv\x3e"+(e.chart.description||"No description available.")+"\x3c/div\x3e\x3ch4\x3eStructure.\x3c/h4\x3e\x3cdiv\x3eChart type: "+(e.chart.typeDescription||b.getTypeDescription())+"\x3c/div\x3e"+(1===d.length?"\x3cdiv\x3e"+
r[0]+" with "+d[0].points.length+" "+(1===d[0].points.length?r[1]:r[2])+".\x3c/div\x3e":"")+(p.xAxis?"\x3cdiv\x3e"+p.xAxis+"\x3c/div\x3e":"")+(p.yAxis?"\x3cdiv\x3e"+p.yAxis+"\x3c/div\x3e":"");b.getCSV&&(k.innerHTML="View as data table.",k.href="#"+c,k.setAttribute("tabindex","-1"),k.onclick=h.onTableAnchorClick||function(){b.viewData();m.getElementById(c).focus()},l.appendChild(k),w.appendChild(l));x.innerHTML="Chart graphic.";b.renderTo.insertBefore(x,b.renderTo.firstChild);b.renderTo.insertBefore(w,
b.renderTo.firstChild);v(!0,x.style,A);v(!0,w.style,A)};d.Chart.prototype.callbacks.push(function(a){var c=a.options;if(c.accessibility.enabled){var b=m.createElementNS("http://www.w3.org/2000/svg","title"),g=m.createElementNS("http://www.w3.org/2000/svg","g"),e=a.container.getElementsByTagName("desc")[0],h=a.container.getElementsByTagName("text"),k="highcharts-title-"+a.index,q="highcharts-data-table-"+a.index,t="highcharts-information-region-"+a.index,x=c.title.text||"Chart",p=c.exporting&&c.exporting.csv&&
c.exporting.csv.columnHeaderFormatter,r=[];b.textContent=n(x);b.id=k;e.parentNode.insertBefore(b,e);a.renderTo.setAttribute("role","region");a.renderTo.setAttribute("aria-label",y("Interactive chart. "+x+". Use up and down arrows to navigate with most screen readers."));if(a.exportSVGElements&&a.exportSVGElements[0]&&a.exportSVGElements[0].element){var u=a.exportSVGElements[0].element.onclick,b=a.exportSVGElements[0].element.parentNode;a.exportSVGElements[0].element.onclick=function(){u.apply(this,
Array.prototype.slice.call(arguments));a.addAccessibleContextMenuAttribs();a.highlightExportItem(0)};a.exportSVGElements[0].element.setAttribute("role","button");a.exportSVGElements[0].element.setAttribute("aria-label","View export menu");g.appendChild(a.exportSVGElements[0].element);g.setAttribute("role","region");g.setAttribute("aria-label","Chart export menu");b.appendChild(g)}a.rangeSelector&&l(["minInput","maxInput"],function(c,b){a.rangeSelector[c]&&(a.rangeSelector[c].setAttribute("tabindex",
"-1"),a.rangeSelector[c].setAttribute("role","textbox"),a.rangeSelector[c].setAttribute("aria-label","Select "+(b?"end":"start")+" date."))});l(h,function(a){a.setAttribute("aria-hidden","true")});a.addScreenReaderRegion(t,q);v(!0,c.exporting,{csv:{columnHeaderFormatter:function(a,c,b){if(!a)return"Category";if(a instanceof d.Axis)return a.options.title&&a.options.title.text||(a.isDatetimeAxis?"DateTime":"Category");var f=r[r.length-1];1<b&&(f&&f.text)!==a.name&&r.push({text:a.name,span:b});return p?
p.call(this,a,c,b):1<b?c:a.name}}});d.wrap(a,"getTable",function(a){return a.apply(this,Array.prototype.slice.call(arguments,1)).replace("\x3ctable\x3e",'\x3ctable id\x3d"'+q+'" summary\x3d"Table representation of chart"\x3e\x3ccaption\x3e'+x+"\x3c/caption\x3e")});d.wrap(a,"viewData",function(a){if(!this.dataTableDiv){a.apply(this,Array.prototype.slice.call(arguments,1));var c=m.getElementById(q),b=c.getElementsByTagName("thead")[0],f=c.getElementsByTagName("tbody")[0],d=b.firstChild.children,e="\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e",
g,h;c.setAttribute("tabindex","-1");l(f.children,function(a){g=a.firstChild;h=m.createElement("th");h.setAttribute("scope","row");h.innerHTML=g.innerHTML;g.parentNode.replaceChild(h,g)});l(d,function(a){"TH"===a.tagName&&a.setAttribute("scope","col")});r.length&&(l(r,function(a){e+='\x3cth scope\x3d"col" colspan\x3d"'+a.span+'"\x3e'+a.text+"\x3c/th\x3e"}),b.insertAdjacentHTML("afterbegin",e))}})}})})(n);(function(d){function n(b){return"string"===typeof b?b.replace(/<\/?[^>]+(>|$)/g,""):b}function y(b,
a){this.chart=b;this.id=a.id;this.keyCodeMap=a.keyCodeMap;this.validate=a.validate;this.init=a.init;this.terminate=a.terminate}function q(b){var a;b&&b.onclick&&u.createEvent&&(a=u.createEvent("Events"),a.initEvent("click",!0,!1),b.onclick(a))}function m(b){return b.isNull&&b.series.chart.options.accessibility.keyboardNavigation.skipNullPoints||b.series.options.skipKeyboardNavigation||!b.series.visible}var l=d.win,u=l.document,k=d.each,z=d.addEvent,v=d.fireEvent,A=d.merge,t=d.pick;d.extend(d.SVGElement.prototype,
{addFocusBorder:function(b,a){this.focusBorder&&this.removeFocusBorder();var c=this.getBBox();b=t(b,3);this.focusBorder=this.renderer.rect(c.x-b,c.y-b,c.width+2*b,c.height+2*b,a&&a.borderRadius).addClass("highcharts-focus-border").attr({stroke:a&&a.stroke,"stroke-width":a&&a.strokeWidth}).attr({zIndex:99}).add(this.parentGroup)},removeFocusBorder:function(){this.focusBorder&&(this.focusBorder.destroy(),delete this.focusBorder)}});d.Series.prototype.keyboardMoveVertical=!0;k(["column","pie"],function(b){d.seriesTypes[b]&&
(d.seriesTypes[b].prototype.keyboardMoveVertical=!1)});d.setOptions({accessibility:{keyboardNavigation:{enabled:!0,focusBorder:{enabled:!0,style:{color:"#000000",lineWidth:1,borderRadius:2},margin:2}}}});y.prototype={run:function(b){var a=this,c=b.which||b.keyCode,f=!1,d=!1;k(this.keyCodeMap,function(e){-1<e[0].indexOf(c)&&(f=!0,d=!1===e[1].call(a,c,b)?!1:!0)});f||9!==c||(d=this.move(b.shiftKey?-1:1));return d},move:function(b){var a=this.chart;this.terminate&&this.terminate(b);a.keyboardNavigationModuleIndex+=
b;var c=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex];a.focusElement&&a.focusElement.removeFocusBorder();if(c){if(c.validate&&!c.validate())return this.move(b);if(c.init)return c.init(b),!0}a.keyboardNavigationModuleIndex=0;0<b?(this.chart.exiting=!0,this.chart.tabExitAnchor.focus()):this.chart.renderTo.focus();return!1}};d.Axis.prototype.panStep=function(b,a){var c=a||3;a=this.getExtremes();var f=(a.max-a.min)/c*b,c=a.max+f,f=a.min+f,d=c-f;0>b&&f<a.dataMin?(f=a.dataMin,c=f+d):0<b&&
c>a.dataMax&&(c=a.dataMax,f=c-d);this.setExtremes(f,c)};d.Chart.prototype.setFocusToElement=function(b,a){var c=this.options.accessibility.keyboardNavigation.focusBorder;c.enabled&&b!==this.focusElement&&(this.focusElement&&this.focusElement.removeFocusBorder(),a&&a.element&&a.element.focus?a.element.focus():b.element.focus&&b.element.focus(),b.addFocusBorder(c.margin,{stroke:c.style.color,strokeWidth:c.style.lineWidth,borderRadius:c.style.borderRadius}),this.focusElement=b)};d.Point.prototype.highlight=
function(){var b=this.series.chart;if(this.isNull)b.tooltip&&b.tooltip.hide(0);else this.onMouseOver();this.graphic&&b.setFocusToElement(this.graphic);b.highlightedPoint=this;return this};d.Chart.prototype.highlightAdjacentPoint=function(b){var a=this.series,c=this.highlightedPoint,f=c&&c.index||0,d=c&&c.series.points,e=this.series&&this.series[this.series.length-1],h=e&&e.points&&e.points[e.points.length-1],e=c&&c.series.connectEnds&&f>d.length-3?2:1;if(!a[0]||!a[0].points)return!1;if(c){if(d[f]!==
c)for(h=0;h<d.length;++h)if(d[h]===c){f=h;break}a=a[c.series.index+(b?1:-1)];f=d[f+(b?e:-1)]||a&&a.points[b?0:a.points.length-(a.connectEnds?2:1)];if(void 0===f)return!1}else f=b?a[0].points[0]:h;return m(f)?(this.highlightedPoint=f,this.highlightAdjacentPoint(b)):f.highlight()};d.Series.prototype.highlightFirstValidPoint=function(){for(var b=this.chart.highlightedPoint,a=b.series===this?b.index:0,b=this.points,c=a,d=b.length;c<d;++c)if(!m(b[c]))return b[c].highlight();for(;0<=a;--a)if(!m(b[a]))return b[a].highlight();
return!1};d.Chart.prototype.highlightAdjacentSeries=function(b){var a,c,d=this.highlightedPoint,g=(a=this.series&&this.series[this.series.length-1])&&a.points&&a.points[a.points.length-1];if(!this.highlightedPoint)return a=b?this.series&&this.series[0]:a,(c=b?a&&a.points&&a.points[0]:g)?c.highlight():!1;a=this.series[d.series.index+(b?-1:1)];if(!a)return!1;a:{var g=Infinity,e,h=a.points.length;if(void 0===d.plotX||void 0===d.plotY)c=void 0;else{for(;h--;){e=a.points[h];if(void 0===e.plotX||void 0===
e.plotY){c=void 0;break a}e=(d.plotX-e.plotX)*(d.plotX-e.plotX)*4+(d.plotY-e.plotY)*(d.plotY-e.plotY)*1;e<g&&(g=e,c=h)}c=a.points[c||0]}}if(!c)return!1;if(!a.visible)return c.highlight(),b=this.highlightAdjacentSeries(b),b?b:(d.highlight(),!1b.isNull&&b.series.chart.options.accessibility.keyboardNavigation.skipNullPoints||b.series.options.skipKeyboardNavigation||!b.series.visible}var l=d.win,u=l.document,k=d.each,z=d.addEvent,v=d.fireEvent,A=d.merge,t=d.pick;d.extend(d.SVGElement.prototype,
{addFocusBorder:function(b,a){this.focusBorder&&this.removeFocusBorder();var c=this.getBBox();b=t(b,3);this.focusBorder=this.renderer.rect(c.x-b,c.y-b,c.width+2*b,c.height+2*b,a&&a.borderRadius).addClass("highcharts-focus-border").attr({stroke:a&&a.stroke,"stroke-width":a&&a.strokeWidth}).attr({zIndex:99}).add(this.parentGroup)},removeFocusBorder:function(){this.focusBorder&&(this.focusBorder.destroy(),delete this.focusBorder)}});d.Series.prototype.keyboardMoveVertical=!0;k(["column","pie"],function(b){d.seriesTypes[b]&&
(d.seriesTypes[b].prototype.keyboardMoveVertical=!1)});d.setOptions({accessibility:{keyboardNavigation:{enabled:!0,focusBorder:{enabled:!0,style:{color:"#000000",lineWidth:1,borderRadius:2},margin:2}}}});y.prototype={run:function(b){var a=this,c=b.which||b.keyCode,f=!1,d=!1;k(this.keyCodeMap,function(e){-1<e[0].indexOf(c)&&(f=!0,d=!1===e[1].call(a,c,b)?!1:!0)});f||9!==c||(d=this.move(b.shiftKey?-1:1));return d},move:function(b){var a=this.chart;this.terminate&&this.terminate(b);a.keyboardNavigationModuleIndex+=
b;var c=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex];a.focusElement&&a.focusElement.removeFocusBorder();if(c){if(c.validate&&!c.validate())return this.move(b);if(c.init)return c.init(b),!0}a.keyboardNavigationModuleIndex=0;0<b?(this.chart.exiting=!0,this.chart.tabExitAnchor.focus()):this.chart.renderTo.focus();return!1}};d.Axis.prototype.panStep=function(b,a){var c=a||3;a=this.getExtremes();var f=(a.max-a.min)/c*b,c=a.max+f,f=a.min+f,d=c-f;0>b&&f<a.dataMin?(f=a.dataMin,c=f+d):0<b&&
c>a.dataMax&&(c=a.dataMax,f=c-d);this.setExtremes(f,c)};d.Chart.prototype.setFocusToElement=function(b,a){var c=this.options.accessibility.keyboardNavigation.focusBorder;c.enabled&&b!==this.focusElement&&(this.focusElement&&this.focusElement.removeFocusBorder(),a&&a.element&&a.element.focus?a.element.focus():b.element.focus&&b.element.focus(),b.addFocusBorder(c.margin,{stroke:c.style.color,strokeWidth:c.style.lineWidth,borderRadius:c.style.borderRadius}),this.focusElement=b)};d.Point.prototype.highlight=
function(){var b=this.series.chart;if(this.isNull)b.tooltip&&b.tooltip.hide(0);else this.onMouseOver();this.graphic&&b.setFocusToElement(this.graphic);b.highlightedPoint=this;return this};d.Chart.prototype.highlightAdjacentPoint=function(b){var a=this.series,c=this.highlightedPoint,f=c&&c.index||0,d=c&&c.series.points,e=this.series&&this.series[this.series.length-1],h=e&&e.points&&e.points[e.points.length-1],e=c&&c.series.connectEnds&&f>d.length-3?2:1;if(!a[0]||!a[0].points)return!1;if(c){if(d[f]!==
c)for(h=0;h<d.length;++h)if(d[h]===c){f=h;break}a=a[c.series.index+(b?1:-1)];f=d[f+(b?e:-1)]||a&&a.points[b?0:a.points.length-(a.connectEnds?2:1)];if(void 0===f)return!1}else f=b?a[0].points[0]:h;return m(f)?(this.highlightedPoint=f,this.highlightAdjacentPoint(b)):f.highlight()};d.Series.prototype.highlightFirstValidPoint=function(){for(var b=this.chart.highlightedPoint,a=b.series===this?b.index:0,b=this.points,c=a,d=b.length;c<d;++c)if(!m(b[c]))return b[c].highlight();for(;0<=a;--a)if(!m(b[a]))return b[a].highlight();
return!1};d.Chart.prototype.highlightAdjacentSeries=function(b){var a,c,d=this.highlightedPoint,g=(a=this.series&&this.series[this.series.length-1])&&a.points&&a.points[a.points.length-1];if(!this.highlightedPoint)return a=b?this.series&&this.series[0]:a,(c=b?a&&a.points&&a.points[0]:g)?c.highlight():!1;a=this.series[d.series.index+(b?-1:1)];if(!a)return!1;a:{var g=Infinity,e,h=a.points.length;if(void 0===d.plotX||void 0===d.plotY)c=void 0;else{for(;h--;){e=a.points[h];if(void 0===e.plotX||void 0===
e.plotY){c=void 0;break a}e=(d.plotX-e.plotX)*(d.plotX-e.plotX)*4+(d.plotY-e.plotY)*(d.plotY-e.plotY)*1;e<g&&(g=e,c=h)}c=a.points[c||0]}}if(!c)return!1;if(!a.visible)return c.highlight(),b=this.highlightAdjacentSeries(b),b?b:(d.highlight(),!1NavButtons.length},init:function(b){var c=a.mapNavButtons[0],d=a.mapNavButtons[1],c=0<b?c:d;k(a.mapNavButtons,function(a,b){a.element.setAttribute("tabindex",-1);a.element.setAttribute("role","button");a.element.setAttribute("aria-label","Zoom "+(b?"out ":"")+"chart")});a.setFocusToElement(c.box,
c);c.setState(2);a.focusedMapNavButtonIx=0<b?0:1}}),b("rangeSelector",[[[37,39,38,40],function(b){b=37===b||38===b?-1:1;if(!a.highlightRangeSelectorButton(a.highlightedRangeSelectorItemIx+b))return this.move(b)}],[[13,32],function(){3!==a.oldRangeSelectorItemState&&q(a.rangeSelector.buttons[a.highlightedRangeSelectorItemIx].element)}]],{validate:function(){return a.rangeSelector&&a.rangeSelector.buttons&&a.rangeSelector.buttons.length},init:function(b){k(a.rangeSelector.buttons,function(a){a.element.setAttribute("tabindex",
"-1");a.element.setAttribute("role","button");a.element.setAttribute("aria-label","Select range "+(a.text&&a.text.textStr))});a.highlightRangeSelectorButton(0<b?0:a.rangeSelector.buttons.length-1)}}),b("rangeSelectorInput",[[[9,38,40],function(b,d){b=9===b&&d.shiftKey||38===b?-1:1;d=a.highlightedInputRangeIx+=b;if(1<d||0>d)return this.move(b);a.rangeSelector[d?"maxInput":"minInput"].focus()}]],{validate:function(){return a.rangeSelector&&a.rangeSelector.inputGroup&&"hidden"!==a.rangeSelector.inputGroup.element.getAttribute("visibility")&&
!1!==a.options.rangeSelector.inputEnabled&&a.rangeSelector.minInput&&a.rangeSelector.maxInput},init:function(b){a.highlightedInputRangeIx=0<b?0:1;a.rangeSelector[a.highlightedInputRangeIx?"maxInput":"minInput"].focus()}}),b("legend",[[[37,39,38,40],function(b){b=37===b||38===b?-1:1;if(!a.highlightLegendItem(a.highlightedLegendItemIx+b))return this.move(b)}],[[13,32],function(){q(a.legend.allItems[a.highlightedLegendItemIx].legendItem.element.parentNode)}]],{validate:function(){return a.legend&&a.legend.allItems&&
a.legend.display&&!(a.colorAxis&&a.colorAxis.length)&&!1!==(a.options.legend&&a.options.legend.keyboardNavigation&&a.options.legend.keyboardNavigation.enabled)},init:function(b){k(a.legend.allItems,function(a){a.legendGroup.element.setAttribute("tabindex","-1");a.legendGroup.element.setAttribute("role","button");a.legendGroup.element.setAttribute("aria-label",n("Toggle visibility of series "+a.name))});a.highlightLegendItem(0<b?0:a.legend.allItems.length-1)}})]};d.Chart.prototype.addExitAnchor=function(){var b=
this;b.tabExitAnchor=u.createElement("div");b.tabExitAnchor.setAttribute("tabindex","0");A(!0,b.tabExitAnchor.style,{position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"});b.renderTo.appendChild(b.tabExitAnchor);return z(b.tabExitAnchor,"focus",function(a){a=a||l.event;b.exiting?b.exiting=!1:(b.renderTo.focus(),a.preventDefault(),b.keyboardNavigationModuleIndex=b.keyboardNavigationModules.length-1,a=b.keyboardNavigationModules[b.keyboardNavigationModuleIndex],a.validate&&
!a.validate()?a.move(-1):a.init(-1))})};d.Chart.prototype.callbacks.push(function(b){var a=b.options.accessibility;a.enabled&&a.keyboardNavigation.enabled&&(b.addKeyboardNavigationModules(),b.keyboardNavigationModuleIndex=0,b.container.hasAttribute&&!b.container.hasAttribute("tabIndex")&&b.container.setAttribute("tabindex","0"),b.tabExitAnchor||(b.unbindExitAnchorFocus=b.addExitAnchor()),b.unbindKeydownHandler=z(b.renderTo,"keydown",function(a){a=a||l.event;var c=b.keyboardNavigationModules[b.keyboardNavigationModuleIndex];
c&&c.run(a)&&a.preventDefault()}),z(b,"destroy",function(){b.unbindExitAnchorFocus&&b.tabExitAnchor&&b.unbindExitAnchorFocus();b.unbindKeydownHandler&&b.renderTo&&b.unbindKeydownHandler()}))})})(n)});
