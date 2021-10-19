<?php

namespace App\Http\Requests;

use App\Rules\PasswordCorrectRule;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class EditProfileRequest extends FormRequest
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
    public function rules(Request $request): array
    {
        return [
            'name'=>'required',
            'phone_number'=>'required|regex:/(09)[0-9]{8}/',
        ];
    }
}
