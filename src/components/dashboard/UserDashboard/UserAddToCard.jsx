"use client"

import React, { useState } from "react";
import UserAddToCardTable from "./UserAddToCardTable";
import useAuth from "@/hooks/useAuth";
import useCartProducts from "@/hooks/useCartProducts";
import MidSpinner from "@/components/Spinners/MidSpinner";
import { useRouter } from "next/navigation";

const UserAddToCard = () => {
  const router = useRouter();
  const { cartProducts, cartLoading, refetch } = useCartProducts();
  const { user } = useAuth();
  // State to track selected product IDs and their data
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  // Function to handle product selection
  const handleProductSelect = (productId, isSelected, productData) => {
    // Find the index of the product with productId in the selectedProducts array
    const index = selectedProducts.findIndex((product) => product.id === productId);

    if (isSelected) {
      // If the product is selected, add it to the selectedProducts array
      if (index === -1) {
        setSelectedProducts([...selectedProducts, { id: productId, data: productData }]);
      }
    } else {
      // If the product is deselected, remove it from the selectedProducts array
      if (index !== -1) {
        const updatedSelectedProducts = [...selectedProducts];
        updatedSelectedProducts.splice(index, 1);
        setSelectedProducts(updatedSelectedProducts);
      }
    }
  };

  // Function to handle "Select All" checkbox change
  const handleSelectAllChange = (isChecked) => {
    // Update the selectAllChecked state
    setSelectAllChecked(isChecked);

    if (isChecked) {
      // If "Select All" is checked, select all products
      const updatedSelectedProducts = cartProducts.map((product) => ({
        id: product._id,
        data: {
          ...product,
          totalPrice: product.price, // Set total price to the product price
        },
      }));
      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts([]);
    }
  };

  // Function to handle quantity change for a product
  const handleQuantityChange = (productId, newQuantity) => {
    // Find the index of the product with productId in the selectedProducts array
    const index = selectedProducts.findIndex((product) => product.id === productId);

    if (index !== -1) {
      // If the product is found in selectedProducts, update its quantity
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts[index].data.quantity = newQuantity;
      // Calculate the total price based on the updated quantity
      updatedSelectedProducts[index].data.totalPrice = (
        newQuantity * updatedSelectedProducts[index].data.price
      ).toFixed(2);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const sendSelectedProductsToCheckout = () => {
    // Check if there are selected products
    if (selectedProducts.length > 0) {
      const cartData = localStorage.getItem("product");
      if (cartData) {
        localStorage.removeItem("product")
        localStorage.setItem("product", JSON.stringify(selectedProducts))
      } else {
        localStorage.setItem("product", JSON.stringify(selectedProducts))
      }
      router.push("/dashboard/user/user_add_to_card/checkout");

    } else {
      // Handle the case where no products are selected
      console.log("No products selected.");
    }
  };


  return (
    <div className="md:mt-16">
      <h1 className="text-start md:text-center text-2xl mb-3">Your Products On Cart</h1>
      <div className="relative overflow-x-auto">
      <table className="mx-auto">
        <thead>
          <tr className="text-[18px] text-white primary-bg">
            <th className="px-6 py-3 leading-4 tracking-wider text-left ">
              <div className="flex items-center justify-center gap-1">
                <input
                  type="checkbox"
                  checked={selectAllChecked}
                  onChange={(e) => handleSelectAllChange(e.target.checked)}
                />
                <label>All</label>
              </div>
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-center">
              Product Name
            </th>
            <th className="px-6 py-3">
              Image
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Price
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Quantity
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-center">
              Total Price
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-start">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 w-full">
          {cartLoading ? (
            <tr>
              <td colSpan="7">
                <MidSpinner />
              </td>
            </tr>
          ) : (
            cartProducts.map((singleCartProduct, i) => (
              <UserAddToCardTable
                key={singleCartProduct._id}
                singleCartProduct={singleCartProduct}
                i={i}
                refetch={refetch}
                selectedProductIds={selectedProducts.map((product) => product.id)}
                onProductSelect={handleProductSelect}
                onQuantityChange={handleQuantityChange}
              />
            ))
          )}
        </tbody>
      </table>
      </div>
      <div className="mx-auto md:w-3/5 mt-4">
        {!cartLoading && (
          <button
            className={`${selectedProducts.length > 0 ? "primary-btn" : "disabled-btn"
              }`}
            onClick={sendSelectedProductsToCheckout}
          >
            PROCEED TO CHECKOUT
          </button>
        )}
      </div>
    </div>
  );
};

export default UserAddToCard;
