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


// Smart route
// Route::view('/{path?}', 'welcome')
//     ->where('path', '.*')
//     ->name('react');


Route::get('/', function () {
   return view('layouts.welcome');
});

Route::get('/blog', function () {
   return view('layouts.app');
});

Route::get('/about', function () {
   return view('layouts.app');
});

Route::get('/login', function () {
   return view('layouts.app');
});
