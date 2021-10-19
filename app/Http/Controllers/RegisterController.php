<?php

namespace App\Http\Controllers;

use App\Http\Controllers\API\BaseController;
use App\Http\Requests\ChangePassword;
use App\Http\Requests\EditProfileRequest;
use App\Http\Requests\UserRequest;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\NewUserNotification;
use App\Notifications\SignupActivate;
use App\Rules\ActivationAccuontRule;
use App\Rules\PasswordCorrectRule;
use Carbon\Carbon;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;
use phpseclib3\Crypt\Hash;

class RegisterController extends BaseController
{
    public function register(UserRequest $request){
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $input['activation_token'] = Str::random(50);
        $user = User::create($input);
        $success['token'] = $user->createToken('Personal Access Token');
        $success['name'] = $user->name;
        $user->notify(new SignupActivate($user));
        $admins = User::where('role','admin')->get();
        Notification::send($admins,new NewUserNotification($user));
        return response()->json([
                "token"=>  $success['token'] ,
                "message"=>"user register successfully,\n Please go to Email to active account . ",
                "user"=>$user
            ]

        );
    }
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => ['required','string',new PasswordCorrectRule($request->password,$request->email)],
            'remember_me' => 'boolean',
            'actives'=> new ActivationAccuontRule($request->email)
        ]);
//
        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized',
            ],401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
            'user'=>$user
        ]);
    }
    public function updateProfile(EditProfileRequest $request): \Illuminate\Http\JsonResponse
    {
        $user = User::find($request->id);
        $user->update($request->only(['name','phone_number']));
        return response()->json($user);
    }


    public function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function user(Request $request)
    {
        return new UserResource($request->user());
    }

    public function signupActivate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'This activation token is invalid.'
            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
        return $user;
    }
    public function changePassword(ChangePassword $changePassword): \Illuminate\Http\JsonResponse
    {

        $user = User::find($changePassword->id);
        $newPassword = bcrypt($changePassword->password);
        $user->update(["password"=> $newPassword]);
        return response()->json($user);

    }

}
