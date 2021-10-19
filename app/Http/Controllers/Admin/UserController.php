<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAllUsers(): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return UserResource::collection(User::all());
    }

    public function addBalance(Request $userRequest, $user): \Illuminate\Http\JsonResponse
    {
        $user = User::find($user);
        $amount = Account::create([
            "user_id"=> $user->id,
            "balance" =>  $userRequest->balance
        ]);
        $user->balance = $user->balance + $amount->balance;
        $user->save();

        return  response()->json(['message'=>'success add balance','data'=> $user]);
    }
    public function showUser($user): UserResource
    {
        return new UserResource(User::find($user));
    }
    public function addAdmin($user ,Request $request){
        $admin = User::find($user);
        $admin->role = $request->role;
        $admin->save();
        return response()->json(['message'=>'update User to Admin','data'=>$admin]);
    }
    public function showAccountUser($user): \Illuminate\Http\JsonResponse
    {
        $user = User::find($user)->with("accounts")->get();
        return response()->json($user);
    }

}
