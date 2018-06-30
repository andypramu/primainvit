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

         <!-- DONUT CHART -->
          <div class="box box-komputer">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Printer dan Scanner</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body chart-responsive">
               <div class="chart" id="printer-donut" style="height: 300px; position: relative;"></div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        <!-- batas col md6 -->
        </div>

           <!-- Table Detail -->
      {{-- <div class="row"> --}}
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Detail Table Printer & Scanner</h3>

              <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                  <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tr>
                  <th>ID Perangkat</th>
                  <th>Jenis Perangkat</th>
                  <th>Brand</th>
                  <th>Tipe Printer & Scanner</th>
                  <th>Lokasi</th>
                  <th>Status</th>
                  <th>Keterangan</th>
                </tr>
                <tr>
                  <td>PR001</td>
                  <td>Printer</td>
                  <td>HP</td>
                  <td>Laserjet 500 Color M551</td>
                  <td>Ruang IT Corporate</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT Corporate.</td>
                </tr>
                <tr>
                  <td>PR002</td>
                  <td>Printer</td>
                  <td>Epson </td>
                  <td>L1300</td>
                  <td>Ruang IT Corporate</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT Corporate.</td>
                </tr>
                <tr>
                  <td>PR003</td>
                  <td>Printer</td>
                  <td>Epson </td>
                  <td>L355</td>
                  <td>Ruang Legal</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Legal.</td>
                </tr>
                <tr>
                  <td>SC001</td>
                  <td>Scanner</td>
                  <td>Fujitsu </td>
                  <td>Scansnap IX500</td>
                  <td>Ruang Legal</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Legal.</td>
                </tr>
                <tr>
                  <td>PR004</td>
                  <td>Printer</td>
                  <td>Epson </td>
                  <td>L110</td>
                  <td>Ruang HC</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang HC Group.</td>
                </tr>
                <tr>
                  <td>PR005</td>
                  <td>Printer</td>
                  <td>Epson </td>
                  <td>L120</td>
                  <td>Ruang CHC</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang CHC IPG.</td>
                </tr>
                <tr>
                  <td>PR006</td>
                  <td>Printer</td>
                  <td>HP</td>
                  <td>Laserjet CP 1025</td>
                  <td>Ruang Direksi</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Direksi.</td>
                </tr>
                <tr>
                  <td>PR007</td>
                  <td>Printer</td>
                  <td>Epson</td>
                  <td>L355</td>
                  <td>Ruang Finance</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Finance.</td>
                </tr>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      {{-- </div> --}}
        
      </div>

    </section>
<!-- /.content -->
<script>
  $(function () {
    "use strict";

    //DONUT CHART
    var donut = new Morris.Donut({
      element: 'printer-donut',
      resize: true,
      colors: ["#3c8dbc", "#f56954", "#00a65a", "#605ca8", "#001F3F", "#39CCCC", "#D81B60"],
      data: [
              {label: "Ruang IT", value: 2 },
              {label: "Ruang Legal", value: 2 },
              {label: "Ruang Direksi", value: 1 },
              {label: "Ruang Finance", value: 1 },
              {label: "Ruang HC", value: 1 },
              {label: "Ruang CHC IPG", value: 1 },
            ],
          hideHover: 'auto'
    });
  });
</script>
@endsection