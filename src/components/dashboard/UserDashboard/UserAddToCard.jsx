"use client"

import React, { useState } from "react";
import UserAddToCardTable from "./UserAddToCardTable";
import useAuth from "@/hooks/useAuth";
import useCartProducts from "@/hooks/useCartProducts";
import MidSpinner from "@/components/Spinners/MidSpinner";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import toast, { Toaster } from "react-hot-toast";
import UserUpdateProfileModal from "@/components/Modal/userModal/UserUpdateProfileModal";
import { BiEdit } from "react-icons/bi";
import Link from "next/link";

const UserAddToCard = () => {
  const router = useRouter();
  const { cartProducts, cartLoading, refetch } = useCartProducts();
  const { userInfo, cLoading, refetch: uRefetch } = useUserInfo();
  console.log(userInfo?.user)
  const [isOpen, setIsOpen] = useState(false);
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
          totalPrice: product.price, 
        },
      }));
      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts([]);
    }
  };

  // Function to handle quantity change for a product
  const handleQuantityChange = (productId, newQuantity) => {
    const index = selectedProducts.findIndex((product) => product.id === productId);

    if (index !== -1) {
      // If the product is found in selectedProducts, update its quantity
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts[index].data.quantity = newQuantity;
      
      updatedSelectedProducts[index].data.totalPrice = (
        newQuantity * updatedSelectedProducts[index].data.price
      ).toFixed(2);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const sendSelectedProductsToCheckout = () => {
    if (selectedProducts.length > 0) {
      const cartData = localStorage.getItem("product");
      if (cartData) {
        localStorage.removeItem("product")
        localStorage.setItem("product", JSON.stringify(selectedProducts))
      } else {
        localStorage.setItem("product", JSON.stringify(selectedProducts))
      }

      if (!userInfo?.user?.address) {
        toast.error("Please Add address at first")
        return;
      } else {
        router.push("/dashboard/user/user_add_to_card/checkout");
      }


    } else {
      // Handle the case where no products are selected
      console.log("No products selected.");
    }
  };


  return (
    <div className="md:mt-16">
      <h1 className="text-center text-2xl mb-3">Your Products On Cart</h1>
      <hr className="border-t border-white mb-3" />
      <div className="flex flex-col md:flex-row gap-3">

        {cartProducts?.length > 0 ? <>
          <div className="grid grid-cols-1 gap-3 w-full md:w-2/3">
            {
              !cartLoading && <div className="bg-white p-3 flex items-center" style={{ maxHeight: "80px", overflow: "hidden" }}>
                <input
                  type="checkbox"
                  checked={selectAllChecked}
                  onChange={(e) => handleSelectAllChange(e.target.checked)}
                />
                <label className="ml-6">Select All</label>
              </div>
            }
            {cartLoading ? (
              <div>
                <MidSpinner />
              </div>
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
          </div>

          <div className="w-full md:w-1/3 bg-white h-full">
            {!cartLoading && (
              <div className="p-3 text-lg">
                <div>
                  <div className="flex justify-between">
                    <h1>Deliver To: {userInfo?.user?.name}</h1>
                    <button onClick={() => setIsOpen(!isOpen)}
                      className="text-2xl"><BiEdit /></button>
                  </div>
                  <p>Address: {userInfo?.user?.address}</p>
                  <p>Phone: {userInfo?.user?.phone}</p>
                  <p>Email: {userInfo?.user?.email}</p>
                </div>
                <div>
                  <button
                    className={`w-full mt-4 ${selectedProducts.length > 0 ? "primary-btn" : "disabled-btn"}`}
                    onClick={sendSelectedProductsToCheckout}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div></> : <>
          <div className="flex justify-center items-center flex-col h-80 w-full">
            <h1 className="text-3xl">No Products added</h1>
            <Link className="primary-bg p-2 hover:bg-[#379a22] rounded-md text-white text-lg mt-6" href={"/shops"}>Go to Shop For Products</Link>
          </div>
        </>}
      </div>
      <UserUpdateProfileModal
        refetch={uRefetch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Toaster />
    </div>
  );

};

export default UserAddToCard;