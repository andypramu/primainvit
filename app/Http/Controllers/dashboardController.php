<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use session;
use DB;
class dashboardController extends Controller
{
   public function tes()
   {

   		return DB::table('tb_user')->get();
   		return view('tes');
   }
}
