
<!DOCTYPE html>
<html>
@include('layout.head')
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
 	@include('layout.nav')
  <!-- Left side column. contains the logo and sidebar -->
 	@include('layout.sidebar')
  	<div class="content-wrapper">
 		@yield('content')  
 	</div> 
 	@include('layout.footer')
  	<div class="control-sidebar-bg"></div>
</div>
@include('layout.script')
@yield('extra_script')
</body>
</html>
