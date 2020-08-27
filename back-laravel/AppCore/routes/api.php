<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/test', function(){
	return response()->json(['hola' => '123']);
});

Route::post('/upload-image', function(){
	return response()->json(['success' => '1']);
});

Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('register', 'AuthController@register');
    Route::post('verified', 'AuthController@verified');
});

Route::group([
    'prefix' => 'users',
], function () {
	Route::get('get-all-with-pagination', 'Admin\Main\UsersController@getAllWithPagination');
	Route::post('save', 'Admin\Main\UsersController@store');
    Route::put('update-profile/{id}', 'Admin\Main\UsersController@updateProfile');
    Route::delete('delete/{id}', 'Admin\Main\UsersController@destroy');
});