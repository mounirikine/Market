<!-- Basic Bootstrap Table -->
@extends('layouts.main')
@section('content')

<div class="pb-4">
    <a class="btn btn-primary text-white" href="{{route('product.create')}}">ADD PRODUCT</a>
</div>
<div class="card">
    <h5 class="card-header">All Products</h5>
    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>price</th>
            <th>Old price</th>
            <th>Category</th>
            <th>ratting</th>
            <th>quantity</th>
            <th>image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0">
            @foreach ($products as $product)
            <tr>
                <td>{{$product->id}}</td>
                <td>{{$product->product_name}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->old_price}}</td>
                <td>{{$product->category}}</td>
                <td>{{$product->ratting}}</td>
                <td>{{$product->quantity}}</td>
                <td><img src="{{ asset('storage/images/' . $product->image) }}" alt="" style="width: 100px"></td>

                <td>
                    <button class="btn btn-success">Edite</button>
                    <button class="btn btn-danger">DELETE</button>
                </td>
              </tr>
            @endforeach
          
         
        </tbody>
      </table>
    </div>
  </div>
  <!--/ Basic Bootstrap Table -->


  @endsection