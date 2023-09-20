"use client";
import useAuth from "@/hooks/useAuth";
import useUserInfo from "@/hooks/useUserInfo";
import axios from "axios";
import React from "react";

const PlaceOrderVoucher = ({ cartData }) => {
  const { userInfo } = useUserInfo();
  const { user } = useAuth();
  const vatRate = 0.1;
  const shippingFee = 50;

  // Calculate total quantity, total price, and collect item details
  let totalQuantity = 0;
  let totalPrice = 0;
  const itemDetails = [];

  cartData.forEach((item) => {
    // Ensure quantity and price are numeric (remove the dollar sign)
    const quantity = parseInt(item.data.quantity, 10);
    const price = parseFloat(item.data.price.replace("$", ""));

    // Calculate the item's price and add it to the total price
    const itemPrice = quantity * price;
    totalPrice += itemPrice;

    // Add to total quantity
    if (!isNaN(quantity)) {
      totalQuantity += quantity;
    }

    // Collect item details including productImage, price, and totalPrice
    itemDetails.push({
      productName: item.data.productName,
      productID: item.data.productID,
      productImage: item.data.productImage,
      price: price.toFixed(2),
      quantity: quantity,
      totalPrice: itemPrice.toFixed(2),
    });
  });

  // Calculate VAT amount
  const vat = totalPrice * vatRate;

  // Calculate total payment (items total + VAT + shipping fee)
  const totalPayment = totalPrice + vat + shippingFee;

  const handlePlaceOrder = async () => {
    const orderData = {
      itemDetails: itemDetails,
      totalQuantity: totalQuantity,
      totalPrice: totalPrice.toFixed(2),
      vat: vat.toFixed(2),
      shippingFee: shippingFee.toFixed(2),
      totalPaymentBDT: (totalPayment * 100).toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      currency: "BDT",
      customerName: userInfo?.user?.name || user?.displayName,
      customerEmail: userInfo?.user?.email || user?.email,
      customerImage: userInfo?.user?.image || user?.displayURL,
    };
    // yoga-mindfulness-server.vercel.app/user/cart/product/order_api
    https: console.log("Placing Order with Data:", orderData);
    const response = await axios.post(
      "https://yoga-mindfulness-server.vercel.app/user/cart/product/order_api",
      orderData
    );
    console.log(response);
    window.location.replace(response.data.url);
  };

  return (
    <div className="max-w-3xl p-4 mx-auto bg-white rounded-md border border-green-500">
      <div className="p-4 mb-6 border-b-2 border-b-green-500">
        <h1 className="text-3xl mb-5">Summary</h1>
        <div className="mb-4">
          {itemDetails.map((item, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">Product Name:</span>{" "}
              {item.productName}
              <br />
              <span className="font-bold">Product ID:</span> {item.productID}
            </div>
          ))}
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Total Quantity:</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Total Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">VAT (10%):</span>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Shipping Fee:</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Total Payment:</span>
          <span className="text-red-500 font-bold">
            ${totalPayment.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={handlePlaceOrder} className="primary-btn">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderVoucher;
