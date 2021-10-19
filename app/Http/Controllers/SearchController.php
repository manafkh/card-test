<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;



class SearchController extends Controller
{
    public function searchProduct(Request $request): \Illuminate\Http\JsonResponse
    {
        if ($request->has('query'))
        $query = $request->get('query');
        $product = Product::where('quantity','like','%'.$query.'%')
                          ->orWhere('price','like','%'.$query.'%')
                          ->get();
        return response()->json($product);
    }
}
