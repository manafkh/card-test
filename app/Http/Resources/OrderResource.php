<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'player_game_id'=> $this->player_game_id,
            'player_name'=>$this->player_name,
            'status'=>$this->status,
            'order_owner'=>new UserResource($this->user),
            'product'=> new ProductResource($this->product)
        ];

    }
}
