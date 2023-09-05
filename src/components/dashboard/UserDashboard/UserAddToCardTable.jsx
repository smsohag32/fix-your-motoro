
import axios from 'axios';
import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const UserAddToCardTable = ({ singleCartProduct, i, refetch, selectedProductIds, onProductSelect }) => {
  const { userName, userEmail, productID, productName, price, _id } = singleCartProduct;
  const [quantity, setQuantity] = useState(1);

  // Function to increase the quantity
const increaseQuantity = () => {
  setQuantity(quantity + 1);
  // Calculate the total price based on the updated quantity
  const updatedTotalPrice = price * (quantity + 1);
  // Call the onProductSelect function passed from the parent component
  onProductSelect(_id, true, {
    ...singleCartProduct,
    quantity: quantity + 1,
    totalPrice: updatedTotalPrice.toFixed(2),
  });
};

// Function to decrease the quantity, with a minimum of 1
const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
    // Calculate the total price based on the updated quantity
    const updatedTotalPrice = price * (quantity - 1);
    // Call the onProductSelect function passed from the parent component
    onProductSelect(_id, true, {
      ...singleCartProduct,
      quantity: quantity - 1,
      totalPrice: updatedTotalPrice.toFixed(2),
    });
  }
};

  // Calculate total price
  const totalPrice = price * quantity;

  // Function to handle checkbox selection
  const handleCheckboxChange = (productId, isSelected) => {
    // Calculate the total price based on the current quantity
    const updatedTotalPrice = price * quantity;
  
    // Call the onProductSelect function passed from the parent component
    onProductSelect(productId, isSelected, {
      ...singleCartProduct,
      quantity: quantity,
      totalPrice: updatedTotalPrice,
    }); // Pass the product data including quantity and total price
  };

  // remove product from cart
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://fya-backend.vercel.app/api/v1/auth/carts/${id}`);
      refetch();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <tr className="">
      <td className="px-6 py-4 whitespace-no-wrap">
        <input
          type="checkbox"
          checked={selectedProductIds.includes(_id)}
          onChange={(e) => handleCheckboxChange(_id, e.target.checked)}
        />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">{productName}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{price}</td>
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
      <td className="px-6 py-4 whitespace-no-wrap">{totalPrice.toFixed(2)}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
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


