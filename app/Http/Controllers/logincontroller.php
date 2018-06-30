<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class logincontroller extends Controller
{
    public function index()
    {
    	return view('cobacak/login');
    }

    public function regist()
    {
    	return view('cobacak/register');
    }

}
