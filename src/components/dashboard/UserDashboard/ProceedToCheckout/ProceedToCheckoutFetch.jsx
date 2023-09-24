"use client"

import { useEffect, useState } from "react";
import Spinner from "@/components/Spinners/Spinner";
import Image from "next/image";
import PlaceOrderVoucher from "./PlaceOrderVoucher";


const ProceedToCheckoutFetch = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product")) || [];
    setCartData(data);
  }, []);

  return (
    <div className="md:mt-16">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="overflow-hidden">
            {cartData.map((product, i) => (
              <div key={product.data._id} className="bg-white shadow-md p-4 rounded-md border border-green-500 mb-1">
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
              </div>
            ))}
          </div>
        </div>
        <div>
          <PlaceOrderVoucher cartData={cartData} />
        </div>
      </div>
    </div>
  );
};

export default ProceedToCheckoutFetch;

