"use client"


import {  useEffect, useState } from "react";
import PlaceOrderVoucher from "./PlaceOrderVoucher";
import Spinner from "@/components/Spinners/Spinner";

const ProceedToCheckoutFetch = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product")) || [];
    setCartData(data);
  }, [])

  return (
    <div className="md:mt-16">
      <h1 className="text-3xl font-bold mb-8">Cart Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="grid grid-cols-1 gap-3">
        {cartData.map((product, i) => (
            <div key={product.data._id} className="bg-white shadow-md p-4 rounded-md">
              <h2 className="text-xl font-semibold">{product.data.productName}</h2>
              <p className="text-gray-600">Price: ${product.data.price}</p>
              <p className="text-gray-600">Quantity: {product.data.quantity}</p>
              <p className="text-gray-600">Total Price: ${product.data.totalPrice}</p>
              <p className="text-gray-600">Description: {product.data.description}</p>
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
