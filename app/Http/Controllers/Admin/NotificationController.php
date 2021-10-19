<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function unreadNotification(): \Illuminate\Http\JsonResponse
    {
        $notifications = auth()->user()->unreadNotifications;

        return response()->json($notifications);
    }

    public function markNotification(Request $request): \Illuminate\Http\Response
    {
        auth()->user()
            ->unreadNotifications
            ->when($request->input('id'), function ($query) use ($request) {
                return $query->where('id', $request->input('id'));
            })
            ->markAsRead();

        return response()->noContent();
    }
}
