"use client"
import React from 'react';

const PlaceOrderVoucher = ({ cartData }) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  const vatRate = 0.1; 
  const shippingFee = 50; 

  const itemDetails = [];

  // Calculate total quantity, total price, and collect item details
  cartData.forEach((item) => {
    // Ensure quantity and price are numeric (remove the dollar sign)
    const quantity = parseInt(item.data.quantity, 10);
    const price = parseFloat(item.data.price.replace('$', ''));

    // Add to total quantity and total price
    if (!isNaN(quantity)) {
      totalQuantity += quantity;
    }
    if (!isNaN(price)) {
      totalPrice += quantity * price;
    }

    // Collect item details
    itemDetails.push({
      productName: item.data.productName,
      productID: item.data.productID,
    });
  });

  // Calculate VAT amount
  const vat = totalPrice * vatRate;

  // Calculate total payment (items total + VAT + shipping fee)
  const totalPayment = totalPrice + vat + shippingFee;

  const handlePlaceOrder = () => {
    const orderData = {
      itemDetails: itemDetails,
      totalQuantity: totalQuantity,
      totalPrice: totalPrice.toFixed(2),
      vat: vat.toFixed(2),
      shippingFee: shippingFee.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    };
    console.log('Placing Order with Data:', orderData);
  };

  return (
    <div className="max-w-3xl p-4 mx-auto bg-white divide-gray-200 rounded-md">
      <div className="p-4 mb-6 border-b-2 border-gray-300">
        <div className="mb-4">
          {itemDetails.map((item, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">Product Name:</span> {item.productName}
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
          <span>${totalPayment.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={handlePlaceOrder} className="primary-btn">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default PlaceOrderVoucher;

