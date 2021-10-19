<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::pluck('name','id' )->all();
        return response()->json($categories);
    }

    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->all());
        return response()->json($category);
    }

    public function destroy($category)
    {
        $result = Category::destroy($category);
        return response()->json($result);
    }
}
