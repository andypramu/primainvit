<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class summaryController extends Controller
{
    public function index($value='')
    {
    	return view('summary.device');
    }
    public function printer_index($value='')
    {
    	return view('summary.printer');
    }
    public function network_index($value='')
    {
    	return view('summary.network');
    }
}
