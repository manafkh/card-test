<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;

use App\Models\User;
use App\Notifications\NewOrderNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class OrderController extends Controller
{
    public function getOrdersMyUser(): \Illuminate\Http\JsonResponse
    {
//        $orders = Order::where('user_id','=',Auth::user()->id)->get();
        $orders = Auth::user()->orders;
        return response()->json(OrderResource::collection($orders));
    }

    public function createOrder(OrderRequest $orderRequest): \Illuminate\Http\JsonResponse
    {
        $Product = Product::find($orderRequest->product_id);
        if ($Product->price > Auth::user()->balance){
            return response()->json(['message'=>'not enough money']);
        }else{
            $user =Auth::user();
            $user->balance = $user->balance - $Product->price;
            $user->save();
            $order = Order::create([
                'product_id'=>$orderRequest->product_id,
                'user_id'=> Auth::user()->id,
                'player_game_id'=>$orderRequest->player_game_id,
                'player_name'=>$orderRequest->player_name,
            ]);
            $admins = User::where('role','admin')->get();
            Notification::send($admins,new NewOrderNotification($order));

            return response()->json([
             'data'=>$order,
             'message'=>'Success Order'
            ]);
        }


    }
}
