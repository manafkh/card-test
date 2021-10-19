<?php

namespace Database\Factories;


use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $product = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'quantity'=>$this->faker->numberBetween(1,500),
            'category_id'=>Category::inRandomOrder()->first()->id,
            'price'=>$this->faker->numberBetween(1,500),
            'details'=>$this->faker->text(100),
        ];
    }
}
