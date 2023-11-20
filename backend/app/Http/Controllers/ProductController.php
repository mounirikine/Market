<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; 

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Product::all();

        return view('pages.products.index' ,compact('products'));

      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return view('pages.products.create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
   
    if ($request->hasFile('image')) {
        // Get the logo file from the request
        $logo_img = $request->file('image');

        // Generate a unique name for the logo image
        $logo_img_name = now()->format('YmdHis') . '.' . $logo_img->getClientOriginalExtension();

        // Store the logo image in the specified directory
        $logo_img->storeAs('public/images', $logo_img_name);
    } else {
        // If no file is present, set $logo_img_name to null
        $logo_img_name = null;
    }

    // Create a new Product instance
    $product = new Product;

    // Set the product attributes from the form data
    $product->product_name = $request->product_name;
    $product->category = $request->category;
    $product->price = $request->price;
    $product->ratting = $request->ratting;
    $product->old_price = $request->old_price;
    $product->quantity = $request->quantity;

    // Set the product image attribute to the file name
    $product->image = $logo_img_name;

    // Save the product to the database
    $product->save();

    // Redirect back with a success message or any other logic
    return redirect()->back()->with('success', 'Product created successfully');
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
