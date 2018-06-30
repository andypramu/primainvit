<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="{{ asset('assets/img/user2-160x160.jpg')}}" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">Main Menu</li>
          <!-- Optionally, you can add icons to the links -->
          <li class="treeview">
            <a href="#"><i class="fa fa-pie-chart"></i> <span>Summary Asset</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
              <li class="{{Request::is('summary/device') ? 'active' : ''}}"><a href='{{url('/summary/device')}}'>Device & Software</a></li>
              <li class="{{Request::is('summary/printer') ? 'active' : ''}}"><a href='{{url('/summary/printer')}}'>Printer & Scanner</a></li>
              <li class="{{Request::is('summary/network') ? 'active' : ''}}"><a href='{{url('/summary/network')}}'>Network Device & Other</a></li>
              {{-- <li class="#"><a href="assetnetwork.html">Network Device & Other</a></li> --}}
            </ul>
          </li>
          
          <li class="treeview">
            <a href="#"><i class="fa fa-desktop"></i> <span>Input Data Asset Komputer</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
              <ul class="treeview-menu">
                <li class="active"><a href="inputbaru.html">Input Data Identitas Baru</a></li>
                <li class="#"><a href="inputmutasi.html">Input Data Identitas Mutasi</a></li>
              </ul>
          </li>
          
          <li class="treeview">
            <a href="#"><i class="fa fa-print"></i> <span>Input Data Printer & Scanner</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
              <li class="#"><a href="inputprinter.html">Input Data Printer</a></li>
              <li class="#"><a href="inputscanner.html">Input Data Scanner</a></li>
            </ul>
          </li>

          <li class="treeview">
            <a href="#"><i class="fa fa-wifi"></i> <span>Input Data Network Device</span>
              <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
              <li class="#"><a href="inputnetwork.html">Input Data Network Device</a></li>
              <li><a href="#">Input Data Other Device</a></li>
            </ul>
          </li>

          <li class="treeview active" >
            <a href="detilpreview.html"><i class="fa fa-list"></i> Detail Preview Asset</a>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
  </section>
    <!-- /.sidebar -->
</aside>