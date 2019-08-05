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

// Blogs
Route::get('blog', 'Api\BlogController@index');
Route::get('blog/{blogs}', 'Api\BlogController@show');

Route::group(['middleware' => 'auth:admin-api'], function() {
    // Blogs
    Route::post('blog', 'Api\BlogController@store');
    Route::put('blog/{blogs}', 'Api\BlogController@update');
    Route::delete('blog/{blogs}', 'Api\BlogController@delete');
});

// Login
Route::post('register', 'Auth\RegisterController@register');
Route::post('admin/register', 'Auth\AdminRegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
