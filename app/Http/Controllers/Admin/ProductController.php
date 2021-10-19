<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        return  ProductResource::collection(Product::latest()->get());
    }

    public function store(ProductRequest $request): \Illuminate\Http\JsonResponse
    {
        $product = Product::create($request->all());

        return response()->json( $product);
    }

    public function edit($product): ProductResource
    {
        return  new ProductResource(Product::find($product));
    }

    public function update(Request $request, $product): \Illuminate\Http\JsonResponse
    {

        $current_product = Product::find($product);
        $current_product->update($request->all());
        return response()->json($current_product);
    }

    public function destroy($product): \Illuminate\Http\JsonResponse
    {

        $result = Product::destroy($product);
        return response()->json($product);
    }
}
