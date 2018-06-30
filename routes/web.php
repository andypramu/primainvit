<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/tes', 'dashboardController@tes');
Route::get('/summary/device', 'summaryController@index');
Route::get('/summary/printer', 'summaryController@printer_index');
Route::get('/summary/network', 'summaryController@network_index');
