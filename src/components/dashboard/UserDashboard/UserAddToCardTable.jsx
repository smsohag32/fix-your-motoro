import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const UserAddToCardTable = ({ singleCartProduct, i, refetch, selectedProductIds, onProductSelect, onQuantityChange }) => {
  const { userName, userEmail, productID, productImage, productName, description, price, _id } = singleCartProduct;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  // Function to update the total price based on quantity
  const updateTotalPrice = (newQuantity) => {
    const updatedTotalPrice = price * newQuantity;
    setTotalPrice(updatedTotalPrice.toFixed(2));
    return updatedTotalPrice.toFixed(2);
  };

  // Function to increase the quantity
  const increaseQuantity = () => {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      const updatedTotalPrice = updateTotalPrice(newQuantity);
      onProductSelect(_id, true, {
        ...singleCartProduct,
        quantity: newQuantity,
        totalPrice: updatedTotalPrice,
      });
      onQuantityChange(_id, newQuantity);
    }
  };

  // Function to decrease the quantity, with a minimum of 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      const updatedTotalPrice = updateTotalPrice(newQuantity);
      onProductSelect(_id, true, {
        ...singleCartProduct,
        quantity: newQuantity,
        totalPrice: updatedTotalPrice,
      });
      onQuantityChange(_id, newQuantity);
    }
  };

  const handleCheckboxChange = (productId, isSelected) => {
    // Calculate the total price based on the current quantity
    const updatedTotalPrice = price * quantity;

    // Call the onProductSelect function with the updated values
    onProductSelect(productId, isSelected, {
      ...singleCartProduct,
      quantity: quantity,
      totalPrice: updatedTotalPrice.toFixed(2),
    });
  };

  // Remove product from cart
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://fya-backend.vercel.app/api/v1/auth/carts/${id}`);
      refetch();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className='grid grid-cols-3  bg-white p-3'>
      <div className='flex items-center gap-3'>
        <input
          type="checkbox"
          checked={selectedProductIds.includes(_id)}
          onChange={(e) => handleCheckboxChange(_id, e.target.checked)}
        />
        <Image src={productImage} alt='productImage' height={120} width={120} className='border border-[#69d94f]' />
      </div>
      <div className='text-lg flex flex-col justify-center'>
        <h2>Name: {productName}</h2>
        <h3>Price: ${price}</h3>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <div className="flex items-center">
          <button
            className="px-[10px] py-1 text-white bg-neutral-300 hover:bg-neutral-400 rounded-l focus:outline-none"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button
            className="px-2 py-1 text-white bg-neutral-300 hover:bg-neutral-400 rounded-r focus:outline-none"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <button
          onClick={() => handleRemove(_id)}
          className="p-1 text-2xl  text-red-500 rounded-md hover:text-red-700 border hover:border-red-700"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default UserAddToCardTable;