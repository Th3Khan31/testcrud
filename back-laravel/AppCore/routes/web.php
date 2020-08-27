<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function(){
	\DB::table('users')->truncate();
	\DB::table('users')->insert([
		'name' => 'admin',
		'dni' => random_int(5999999, 59999999),
        'phone' => '+1 (025) 564-4520',
        'is_active' => 1,
        'email' => 'admin@admin.com',
        'email_verified_at' => now(),
        'password' => '$2y$10$ZGNnyIXRP2XWP4bOCsYTUOIgism2XnBA5BMTSFdhANU3XgMY3H45a', // 123456
        'remember_token' => Str::random(10),
	]);
	factory(App\User::class, 2000)->create();
	dd(['test' => 'crud']);
})->name('web.index');