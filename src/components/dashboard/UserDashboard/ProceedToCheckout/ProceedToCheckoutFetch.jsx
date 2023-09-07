"use client"
import { useEffect, useState } from "react";
import PlaceOrderVoucher from "./PlaceOrderVoucher";

const ProceedToCheckoutFetch = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product")) || [];
    setCartData(data);
  }, [])

  return (
    <div className="md:mt-16">
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
