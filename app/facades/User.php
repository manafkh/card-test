<?php


namespace App\facades;


use Illuminate\Support\Facades\Facade;

class User extends Facade
{
    public static function getFacadeAccessor(): string
    {
       return 'name';
    }

}
