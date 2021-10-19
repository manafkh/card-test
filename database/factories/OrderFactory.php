<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "user_id"=>User::inRandomOrder()->first()->id,
            "product_id"=>Product::inRandomOrder()->first()->id,
            "player_game_id"=>$this->faker->numerify('##########'),
            "player_name"=>$this->faker->name,
            "status"=> $this->faker->randomElement(['Active','unActive','refused'])
        ];
    }
}
