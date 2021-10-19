<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{



    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'quantity'=>$this->quantity,
            'price'=>$this->price,
            'details' => $this->details,
            'category'=> new CategoryResource($this->category),
        ];
    }
}
