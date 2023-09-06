"use client"
import React, { useEffect, useState } from "react";
import UserPaymentsTable from "./UserAddToCardTable";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import useCartProducts from "@/hooks/useCartProducts";
import MidSpinner from "@/components/Spinners/MidSpinner";

const UserAddToCard = () => {
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
      const selectedIds = cartProducts.map((product) => product._id);
      const selectedData = cartProducts.map((product) => ({
        id: product._id,
        data: {
          ...product, // Include quantity and total price in the data
        },
      }));
      setSelectedProducts(selectedData);
    } else {
      // If "Select All" is unchecked, deselect all products
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
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  return (
    <div className="md:mt-16">
      <table className="mx-auto md:w-3/5">
        <thead>
          <tr className="text-[20px] text-white primary-bg">
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              <label>
                <input
                  type="checkbox"
                  checked={selectAllChecked}
                  onChange={(e) => handleSelectAllChange(e.target.checked)}
                />
                Select All
              </label>
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Service Name
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Price
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Quantity
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Total Price
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cartLoading ? (
            <tr>
              <td colSpan="6">
                <MidSpinner />
              </td>
            </tr>
          ) : (
            cartProducts.map((singleCartProduct, i) => (
              <UserPaymentsTable
                key={singleCartProduct._id}
                singleCartProduct={singleCartProduct}
                i={i}
                refetch={refetch}
                selectedProductIds={selectedProducts.map((product) => product.id)}
                onProductSelect={handleProductSelect}
                onQuantityChange={handleQuantityChange} // Pass the function to handle quantity change
              />
            ))
          )}
        </tbody>
      </table>
      <div className="mx-auto md:w-3/5 mt-4">
        <Link
          href={{
            pathname: "/dashboard/user/user_add_to_card/checkout",
            query: {
              selectedProductIds: selectedProducts.map((product) => product.id).join(","),
              selectedProductData: JSON.stringify(selectedProducts),
            },
          }}
          className={` ${
            selectedProducts.length > 0 ? "primary-btn" : "disabled-btn"
          }`}
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default UserAddToCard;
