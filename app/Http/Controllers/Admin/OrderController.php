<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function getAllOrder(): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return OrderResource::collection(Order::paginate());
    }

    public function ActivationOrder($order): \Illuminate\Http\JsonResponse
    {
        $active_order = \App\Models\Order::find($order);
        $active_order->status = "Active";
        $active_order->save();

        return response()->json([$active_order , 'message'=>"activation Order Successfully"],201);
    }
    public function getActiveOrder(): \Illuminate\Http\JsonResponse
    {
        $unActiveOrder = Order::where('status','=','Active')->latest()->get();
        return response()->json($unActiveOrder);
    }

    public function getUnActiveOrder(): \Illuminate\Http\JsonResponse
    {
        $unActiveOrder = Order::where('status','=','unActive')->latest()->get();
        return response()->json($unActiveOrder);
    }

    public function getRefusedOrder(): \Illuminate\Http\JsonResponse
    {
        $unActiveOrder = Order::where('status','=','refused')->latest()->get();
        return response()->json($unActiveOrder);
    }

    public function RefusedOrder($order): \Illuminate\Http\JsonResponse
    {
        $refusedOrder = Order::find($order);
        $user =  User::find($refusedOrder->user->id);
        $user->balance = $user->balance + $refusedOrder->product->price;
        $user->save();
        $refusedOrder->status = 'refused';
        $refusedOrder->save();
        return response()->json([$refusedOrder ,'message'=>'The Order is Refused'],201);
    }





}
