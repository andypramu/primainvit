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


<section class="content container-fluid">
      <div class="row">
        <div class="col-md-6">

         <!-- DONUT CHART -->
          <div class="box box-komputer">
            <div class="box-header with-border">
              <h3 class="box-title">Asset Network & Other Device</h3>

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
              <h3 class="box-title">Detail Table Network & Other Device</h3>

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
                  <th>Tipe Perangkat</th>
                  <th>Lokasi</th>
                  <th>Status</th>
                  <th>Keterangan</th>
                </tr>
                <tr>
                  <td>NET001</td>
                  <td>Router</td>
                  <td>Mikrotik</td>
                  <td>X2 RouterboardBoard 1100</td>
                  <td>Ruang IT Corporate</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT Corporate.</td>
                </tr>
                <tr>
                  <td>NET002</td>
                  <td>Access Point</td>
                  <td>Asus</td>
                  <td>RT-N12HP</td>
                  <td>Ruang IT Corporate</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT Corporate</td>
                </tr>
                <tr>
                  <td>NET003</td>
                  <td>Switch</td>
                  <td>DLink</td>
                  <td>DIR-605L</td>
                  <td>Ruang IT Corporate</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT Corporate.</td>
                </tr>
                <tr>
                  <td>NET004</td>
                  <td>Switch</td>
                  <td>Cisco</td>
                  <td>SG95D-08-AS</td>
                  <td>Ruang IT Coporate</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT Corporate.</td>
                </tr>
                <tr>
                  <td>NET005</td>
                  <td>Printer Server</td>
                  <td>DLink</td>
                  <td>DPR-1061</td>
                  <td>Ruang Finance</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang IT-Corporate.</td>
                </tr>
                <tr>
                  <td>NET006</td>
                  <td>Switch</td>
                  <td>Cisco</td>
                  <td>2950G-24-EL</td>
                  <td>Ruang Pak Bob</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Pak Bob.</td>
                </tr>
                <tr>
                  <td>NET007</td>
                  <td>Converter</td>
                  <td>Clipsal</td>
                  <td>Connect</td>
                  <td>Ruang Pak Bob</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Pak Bob.</td>
                </tr>
                <tr>
                  <td>NET008</td>
                  <td>Switch</td>
                  <td>NetGear</td>
                  <td>GS-108</td>
                  <td>Ruang Finance</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang Finance.</td>
                </tr>
                <tr>
                  <td>NET010</td>
                  <td>Switch</td>
                  <td>DLink</td>
                  <td>DGS-1008A</td>
                  <td>Ruang HC</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang HC.</td>
                </tr>
                <tr>
                  <td>NET011</td>
                  <td>Switch</td>
                  <td>DLink</td>
                  <td>GS-1008C</td>
                  <td>Ruang CSP</td>
                  <td><span class="label label-success">Baik</span></td>
                  <td>Perangkat dalam kondisi bagus dan berada di ruang CSP.</td>
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
              {label: "HP Laser Jet 500 Color M551", value: 1},
              {label: "Epson L355 (Legal)", value: 1},
              {label: "Scanner Fujitsu ScanSnap IX500", value: 1},
              {label: "Epson L355 (Finance)", value: 1},
              {label: "Epson L110 (HC)", value: 1},
              {label: "Epson L120 (CHC)", value: 1},
              {label: "HP Laser Jet CP1025", value: 1}
            ],
          hideHover: 'auto'
    });
  });
</script>
@endsection