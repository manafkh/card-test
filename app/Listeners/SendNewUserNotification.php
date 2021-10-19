<?php

namespace App\Listeners;

use App\Models\User;
use App\Notifications\NewUserNotification;
use Illuminate\Contracts\Queue\ShouldQueue;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendNewUserNotification
{

    public function __construct()
    {
        //
    }


    public function handle($event)
    {
        $admins = User::where('role','admin')->get();
        Notification::send($admins,new NewUserNotification($event->user));
    }
}
