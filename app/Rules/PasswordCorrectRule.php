<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;

class PasswordCorrectRule implements Rule
{

    private $passwordCheck;
    private $emailTOCheckPassword;

    /**
     * Create a new rule instance.
     *
     * @return void
     */

    public function __construct($passwordCheck , $emailTOCheckPassword)
    {
        $this->passwordCheck = $passwordCheck;
        $this->emailTOCheckPassword = $emailTOCheckPassword;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        $user = User::where("email",$this->emailTOCheckPassword)->first();

        if (!password_verify($this->passwordCheck , $user->password)) {
            return false;
        }else
            return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'this Password is not correct';
    }
}
