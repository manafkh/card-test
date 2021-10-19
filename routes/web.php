<?php


use App\Models\User;

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
//Route::get('/product',[App\Http\Controllers\Admin\ProductController::class,'index']);
//Route::get('/forget-password', [ForgotPasswordController::class , 'getEmail']);
//Route::post('/forget-password',[ForgotPasswordController::class , 'postEmail']);
//
//Route::get('/reset-password/{token}', 'ResetPasswordController@getPassword');
//Route::post('/reset-password', 'ResetPasswordController@updatePassword');



//Route::get('/{any?}', function (){
//    return view('welcome');
//})->where('any', '^(?!api\/)[\/\w\.-]*');

Route::get('/test', function (){
        $ordersOfCategory = \App\Models\Category::find(1);
        return $ordersOfCategory->orders;
});

