<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['category_id' ,'price','quantity','details'];



        public function orders(): \Illuminate\Database\Eloquent\Relations\HasMany
        {
            return $this->hasMany(Order::class);
        }

        public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
        {
         return $this->belongsTo(Category::class);
        }
}
