<?php

use App\Http\Controllers\RegisterController;
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

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
Route::get('signup/activate/{token}', [RegisterController::class,'signupActivate']);
Route::group([
    'middleware' => 'auth:api'
], function() {
    Route::get('logout', [RegisterController::class,'logout']);
    Route::get('user', [RegisterController::class,'user']);
    Route::post('updateProfile', [RegisterController::class,'updateProfile']);
    Route::post('changePassword', [RegisterController::class,'changePassword']);


    //TODO FOR USER
    Route::get('getMyOrders',[\App\Http\Controllers\User\OrderController::class,'getOrdersMyUser']);
    Route::post('createOrder',[\App\Http\Controllers\User\OrderController::class,'createOrder']);

    //TODO FOR ADMIN
    Route::get('getAllOrder',[\App\Http\Controllers\Admin\OrderController::class,'getAllOrder']);
    Route::get('getUnActiveOrders',[\App\Http\Controllers\Admin\OrderController::class,'getUnActiveOrder']);
    Route::get('getActiveOrders',[\App\Http\Controllers\Admin\OrderController::class, 'getActiveOrder']);
    Route::get('getRefusedOrders',[\App\Http\Controllers\Admin\OrderController::class, 'getRefusedOrder']);
    Route::post('activationOrder/{order}',[\App\Http\Controllers\Admin\OrderController::class,'ActivationOrder']);
    Route::post('refusedOrder/{order}',[\App\Http\Controllers\Admin\OrderController::class,'RefusedOrder']);

    Route::get('getAllUser',[\App\Http\Controllers\Admin\UserController::class,'getAllUsers']);
    Route::post('addBalance/{user}',[\App\Http\Controllers\Admin\UserController::class,'addBalance']);
    Route::get("showBalanceUser/{user}",[\App\Http\Controllers\Admin\UserController::class,'showAccountUser']);
    Route::get('showUser/{user}',[\App\Http\Controllers\Admin\UserController::class,'showUser']);

    //TODO FOR SUPER ADMIN
    Route::post('addAdmin/{user}',[\App\Http\Controllers\Admin\UserController::class,'addAdmin']);


    //TODO FOR PRODUCT
    Route::get('product',[\App\Http\Controllers\Admin\ProductController::class,'index']);
    Route::post('createProduct',[\App\Http\Controllers\Admin\ProductController::class,'store']);
    Route::delete('destroyProduct/{product}',[\App\Http\Controllers\Admin\ProductController::class,'destroy']);
    Route::get('editProduct/{product}',[\App\Http\Controllers\Admin\ProductController::class,'edit']);
    Route::put('updateProduct/{product}',[\App\Http\Controllers\Admin\ProductController::class,'update']);

    // TODO FOR CATEGORY

    Route::get('categories',[\App\Http\Controllers\Admin\CategoryController::class,"index"]);
    Route::get('createCategory',[\App\Http\Controllers\Admin\CategoryController::class,"store"]);
    Route::get('destroyCategory/{category}',[\App\Http\Controllers\Admin\CategoryController::class,"destroy"]);

    //TODO FOR NOTIFICATION
    Route::get('unreadNotification',[\App\Http\Controllers\Admin\NotificationController::class,'unreadNotification']);
    Route::post('markNotification',[\App\Http\Controllers\Admin\NotificationController::class,'markNotification']);

    //TODO FOR ACCOUNT
    Route::post('createBalance/{userId}',[\App\Http\Controllers\Admin\AccountController::class,'create']);
    Route::delete('destroyBalance/{balance}',[\App\Http\Controllers\Admin\AccountController::class,'destroy']);


    //TODO Search
    Route::get('/search',[\App\Http\Controllers\SearchController::class,'searchProduct']);


});


//TODO FOR
Route::group([
    'namespace' => 'Auth',
    'middleware' => 'api',
    'prefix' => 'password'
], function () {
    Route::post('create', [\App\Http\Controllers\PasswordResetController::class,'create']);
    Route::get('find/{token}', [\App\Http\Controllers\PasswordResetController::class,'find']);
    Route::post('reset', [\App\Http\Controllers\PasswordResetController::class,'reset']);
});
