<?php

namespace App\Http\Requests;

use App\Rules\PasswordCorrectRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class ChangePassword extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        return [

          "oldPassword"=> [new PasswordCorrectRule($request->oldPassword,$request->email)],
          "password"=>'string|min:8|confirmed',
        ];
    }
}
