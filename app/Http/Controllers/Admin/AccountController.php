<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AccountRequest;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function create(AccountRequest $request, $userId): \Illuminate\Http\JsonResponse
    {
        $user = User::find($userId);
        $input =$request->all();
        $input['user_id'] = $userId;
        $account = Account::create($input);
        $user->balance = $user->balance + $request->balance;
        $user->save();

        return response()->json($account);
    }

    public function destroy($balance): \Illuminate\Http\JsonResponse
    {
        $account = Account::find($balance);
        $account->user->balance = $account->user->balance - $account->balance;
        $account->user->save();
        $account->destroy($balance);
        return response()->json($balance);
    }
}
