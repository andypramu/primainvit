@extends('main')

@section('content')

<section class="content-header">
  <h1>
    Dashboard
    <small>Version 2.0</small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active">Dashboard</li>
  </ol>
</section>


<!-- Main content -->
<section class="content container-fluid">
      <div class="row">
        <div class="col-md-6">
            
           <!-- DONUT CHART morris -->
          <div class="box box-komputer">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Komputer</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body ">
               <div class="chart" id="pieChart" style="height: 300px; position: relative;"></div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box --> 

          <!-- /.box BarChart -->
          <div class="box box-os">
            <div class="box-header with-border">
              <h3 class="box-title">Chart Penggunaan Operating Sistem</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="box-body">
              <canvas id="barChart" style="height:250px"></canvas>
            </div>
          </div>

          <!-- box office barchart -->
          <div class="box box-visio">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Microsoft Visio</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <div class="box-body">
                <canvas id="barChartvisio" style="height:250px"></canvas>
              </div>
            </div>
          </div>

           <!-- box office barchart -->
          <div class="box box-delphi">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Delphi</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <div class="box-body">
                <canvas id="barChartdelphi" style="height:250px"></canvas>
              </div>
            </div>
          </div>

        <!-- batas col md6 -->
        </div>

        <!-- box office barchart -->
        <div class="col-md-6">
          <div class="box box-office">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Microsoft Office</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <div class="box-body">
              <canvas id="barChartoffice" style="height:250px"></canvas>
            </div>
            </div>
          </div>

          <!-- box Antivirus barchart -->
          <div class="box box-av">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Anti Virus</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <div class="box-body">
                <canvas id="barChartav" style="height:250px"></canvas>
              </div>
            </div>
          </div>

          <!-- box sql server barchart -->
          <div class="box box-sql">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Sql Server</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <div class="box-body">
                <canvas id="barChartsql" style="height:250px"></canvas>
              </div>
            </div>
          </div>

          <!-- box visual studio barchart -->
          <div class="box box-visual">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Microsoft Visual Studio</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <div class="box-body">
                <canvas id="barChartvisual" style="height:250px"></canvas>
              </div>
            </div>
          </div>

        <!-- batas col md6 -->  
        </div>
      </div>

    </section>
<!-- /.content -->
<script type="text/javascript">
  
    //DONUT morris CHART
    var donut = new Morris.Donut({
     element: 'pieChart',
     resize: true,
     colors: ["#3c8dbc", "#f56954", "#00a65a", "#605ca8", "#001F3F", "#39CCCC", "#D81B60"],
     data: [
             {label: "Server", value: 2},
             {label: "Desktop", value: 7},
             {label: "Thin Client", value: 2},
             {label: "Notebook", value: 30},
           ],
         hideHover: 'auto'
    });


    //-------------
    //- 1 Bar CHART OS -
    //-------------

    var areaChartData = {
      labels  : ['Win Server 2008 R2 Standard', 'Win Server 2008 R2 Standard', 'Win 7 Professional', 'Win 7 Home & Basic', 'Win 7 Home Premium', 'Win 8.1 Professional', 'Win 8 Professional', 'Win XP Professional', 'Win XP Home', 'Win Vista Bussines', 'Win Vista Home Premium', 'Win 10 Professional', 'OS X Lion 10.7.5'],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [1, 1, 6, 2, 2, 10, 6, 1, 1, 1, 1, 6, 1]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
        }
      ]
    }

    //-------------
    //- 2 BAR CHART OS -
    //-------------
    var barChartCanvas                   = $('#barChart').get(0).getContext('2d')
    var barChart                         = new Chart(barChartCanvas)
    var barChartData                     = areaChartData
    barChartData.datasets[1].fillColor   = '#F08080'
    barChartData.datasets[1].strokeColor = '#F08080'
    barChartData.datasets[1].pointColor  = '#F08080'
    var barChartOptions                  = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChart.Bar(barChartData, barChartOptions)


    //-------------
    //- Bar CHART Antivirus -
    //-------------

    var areaChartDataav = {
      labels  : ['Antivirus Symantec Endpoint Protection'],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [37]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [2]
        }
      ]
    }


    //-------------
    //- BAR CHART Antivirus-
    //-------------
    var barChartCanvasav                       = $('#barChartav').get(0).getContext('2d')
    var barChartav                             = new Chart(barChartCanvasav)
    var barChartDataav                         = areaChartDataav
    barChartDataav.datasets[1].fillColor       = '#F08080'
    barChartDataav.datasets[1].strokeColor     = '#F08080'
    barChartDataav.datasets[1].pointColor      = '#F08080'
    var barChartOptionsav                      = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChartav.Bar(barChartDataav, barChartOptionsav)

    //-------------
    //- 1 Bar CHART Microsoft Visio -
    //-------------

    var areaChartDatavisio = {
      labels  : ['Microsoft Visio Standard 2007', 'Microsoft Visio Standard 2013', 'Microsoft Visio Standard 2016' ],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [1,3,1]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : []
        }
      ]
    }


   //-------------
    //- 2 Bar CHART Microsoft Visio -
    //-------------

    var barChartCanvasvisio                    = $('#barChartvisio').get(0).getContext('2d')
    var barChartvisio                          = new Chart(barChartCanvasvisio)
    var barChartDatavisio                      = areaChartDatavisio
    barChartDatavisio.datasets[1].fillColor    = '#F08080'
    barChartDatavisio.datasets[1].strokeColor     = '#F08080'
    barChartDatavisio.datasets[1].pointColor      = '#F08080'
    var barChartOptionsvisio                      = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChartvisio.Bar(barChartDatavisio, barChartOptionsvisio)

    //-------------
    //- 1 Bar CHART SQL Server -
    //-------------

    var areaChartDatasql = {
      labels  : ['Sql Server R2 Standard 2008', 'Sql Server Dev 2005' ],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [1,1]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : []
        }
      ]
    }


    //-------------
    //- 2 Bar CHART Sql Server -
    //-------------

    var barChartCanvassql                      = $('#barChartsql').get(0).getContext('2d')
    var barChartsql                            = new Chart(barChartCanvassql)
    var barChartDatasql                        = areaChartDatasql
    barChartDatasql.datasets[1].fillColor      = '#F08080'
    barChartDatasql.datasets[1].strokeColor    = '#F08080'
    barChartDatasql.datasets[1].pointColor     = '#F08080'
    var barChartOptionssql                     = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChartsql.Bar(barChartDatasql, barChartOptionssql)
   
    //-------------
    //- 1 Bar CHART Delphi -
    //-------------

    var areaChartDatadelphi = {
      labels  : ['Delphi Embarcadero' ],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [2]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : []
        }
      ]
    }


    //-------------
    //- 2 Bar CHART Delphi -
    //-------------

    var barChartCanvasdelphi                   = $('#barChartdelphi').get(0).getContext('2d')
    var barChartdelphi                         = new Chart(barChartCanvasdelphi)
    var barChartDatadelphi                     = areaChartDatadelphi
    barChartDatadelphi.datasets[1].fillColor   = '#F08080'
    barChartDatadelphi.datasets[1].strokeColor = '#F08080'
    barChartDatadelphi.datasets[1].pointColor  = '#F08080'
    var barChartOptionsdelphi                  = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChartdelphi.Bar(barChartDatadelphi, barChartOptionsdelphi)

    //-------------
    //- 1 Bar CHART office -
    //-------------

    var areaChartDataoffice = {
      labels  : ['Office Standard 2013 (OLP)', 'Office Mac Home & Bussines 2011', 'Office Standard 2016 (OLP)', 'Office Standard 2007 (OLP)', 'Office Professional Plus 2007 (OLP)', 'Office Standard 2010 (OLP)', 'Office Home & Bussines 2010 (FPP)', 'Office Small Bussines 2007 (2007)', 'Office Basic 2007 (FPP)'],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [1, 1, 6, 2, 2, 10, 6, 1, 1]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [0, 0, 2, 0, 0, 0, 0, 0, 0]
        }
      ]
    }


    //-------------
    //- 2 BAR CHART Office-
    //-------------
    var barChartCanvasoffice                   = $('#barChartoffice').get(0).getContext('2d')
    var barChartoffice                         = new Chart(barChartCanvasoffice)
    var barChartDataoffice                     = areaChartDataoffice
    barChartDataoffice.datasets[1].fillColor   = '#F08080'
    barChartDataoffice.datasets[1].strokeColor = '#F08080'
    barChartDataoffice.datasets[1].pointColor  = '#F08080'
    var barChartOptionsoffice                  = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChartoffice.Bar(barChartDataoffice, barChartOptionsoffice)


    //-------------
    //- 1 Bar CHART Visual Studio -
    //-------------

    var areaChartDatavisual = {
      labels  : ['Visual Studio 2005', 'Visual Studio 2008 Professional', 'Visual Studio 9.0' ],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : '#90EE90',
          strokeColor         : '#90EE90',
          pointColor          : '#90EE90',
          pointStrokeColor    : '#90EE90',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [1,1,1]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : []
        }
      ]
    }


    //-------------
    //- 2 Bar CHART Visual Studio -
    //-------------

    var barChartCanvasvisual                   = $('#barChartvisual').get(0).getContext('2d')
    var barChartvisual                         = new Chart(barChartCanvasvisual)
    var barChartDatavisual                     = areaChartDatavisual
    barChartDatavisual.datasets[1].fillColor   = '#F08080'
    barChartDatavisual.datasets[1].strokeColor = '#F08080'
    barChartDatavisual.datasets[1].pointColor  = '#F08080'
    var barChartOptionsvisual                  = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero        : true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : true,
      //String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      //Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      //Boolean - If there is a stroke on each bar
      barShowStroke           : true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth          : 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing         : 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing       : 1,
      //String - A legend template
      legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      //Boolean - whether to make the chart responsive
      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    barChartvisual.Bar(barChartDatavisual, barChartOptionsvisual)
</script>
@endsection