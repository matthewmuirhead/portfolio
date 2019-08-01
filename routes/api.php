<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:admin-api')->get('/admin', function (Request $request) {
    return $request->user();
});

Route::resource('blog', 'Api\BlogController');

// Paintings
Route::get('paintings', 'Api\PaintingController@index');
Route::get('paintings/{paintings}', 'Api\PaintingController@show');
// Frames
Route::get('frames', 'Api\FrameController@index');
Route::get('frames/{frames}', 'Api\FrameController@show');
// Payment
Route::post('checkpayment', 'Api\PaymentController@index');

Route::group(['middleware' => 'auth:admin-api'], function() {
    // Paintings
    Route::post('paintings', 'Api\PaintingController@store');
    Route::put('paintings/{paintings}', 'Api\PaintingController@update');
    Route::delete('paintings/{paintings}', 'Api\PaintingController@delete');
    // Frames
    Route::post('frames', 'Api\FrameController@store');
    Route::put('frames/{frames}', 'Api\FrameController@update');
    Route::delete('frames/{frames}', 'Api\FrameController@delete');
});

Route::post('register', 'Auth\RegisterController@register');
Route::post('admin/register', 'Auth\AdminRegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('admin/login', 'Auth\AdminController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('admin/logout', 'Auth\AdminController@logout');
