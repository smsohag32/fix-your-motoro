import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const UserAddToCardTable = ({ singleCartProduct, i, refetch, selectedProductIds, onProductSelect, onQuantityChange }) => {
  const { userName, userEmail, productID, productImage, productName, price, _id } = singleCartProduct;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price); // Initialize with the product's initial price as a string

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
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">
        <input
          type="checkbox"
          checked={selectedProductIds.includes(_id)}
          onChange={(e) => handleCheckboxChange(_id, e.target.checked)}
        />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">{productName}</td>
      <td className="relative transform transition-transform duration-300 hover:scale-110 hover:z-10">
        <Image src={productImage} alt='productImage' height={90} width={90}/>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">{price}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <div className="flex items-center">
          <button
            className="px-[10px] py-1 text-white bg-blue-500 rounded-l focus:outline-none"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button
            className="px-2 py-1 text-white bg-blue-500 rounded-r focus:outline-none"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">{totalPrice}</td>
      <td className="px-6 py-4 whitespace-no-wrap text-center">
        <button
          onClick={() => handleRemove(_id)}
          className="p-1 text-2xl text-white bg-red-600 rounded-md hover:bg-red-900"
        >
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
};

export default UserAddToCardTable;
