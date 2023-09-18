"use client"
<<<<<<< HEAD
import { useEffect, useState } from "react";
import PlaceOrderVoucher from "./PlaceOrderVoucher";
=======


import { useEffect, useState } from "react";
import PlaceOrderVoucher from "./PlaceOrderVoucher";
import Spinner from "@/components/Spinners/Spinner";
import Image from "next/image";
>>>>>>> a183858bf739ccdb2d31928ee4fafd02722540b4

const ProceedToCheckoutFetch = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product")) || [];
    setCartData(data);
    console.log(data)
  }, []);

  return (
    <div className="md:mt-16">
<<<<<<< HEAD
      <h1 className="mb-8 text-3xl font-bold">Cart Items</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-3">
          {cartData.map((product) => (
            <div key={product.data._id} className="p-4 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-semibold">{product.data.productName}</h2>
              <p className="text-gray-600">Price: ${product.data.price}</p>
              <p className="text-gray-600">Quantity: {product.data.quantity}</p>
              <p className="text-gray-600">Total Price: ${product.data.totalPrice}</p>
              <p className="text-gray-600">Description: {product.data.description}</p>
=======
      <h1 className="text-3xl font-bold mb-8 text-green-600">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="grid grid-cols-1 gap-3">
          {cartData.map((product, i) => (
            <div key={product.data._id} className="bg-white shadow-md p-4 rounded-md border border-green-500 ">
              <div className="flex items-center gap-8">
                <div>
                  <Image src={product.data.productImage} alt={product.data.productName} width={150} height={150} className="border border-green-400 hover:border-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl"><span className="font-semibold">Product Name:</span> {product.data.productName}</h2>
                  <p className="text-gray-600">Price: ${product.data.price}</p>
                  <p className="text-gray-600">Quantity: {product.data.quantity}</p>
                  <p className="text-gray-600">
                    Total Price: <span className="text-red-500 font-bold">
                      ${product.data.totalPrice}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-3">Description: {product.data.description}</p>
>>>>>>> a183858bf739ccdb2d31928ee4fafd02722540b4
            </div>
          ))}
        </div>
        <div>
          <PlaceOrderVoucher cartData={cartData} />
        </div>
      </div>
    </div>
  );
};

export default ProceedToCheckoutFetch;
