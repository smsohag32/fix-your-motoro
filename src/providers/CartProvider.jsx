"use client";

import CartContext from "@/context/CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <CartContext.Provider
      value={{
        cartData, 
        setCartData, 
        loading, 
        setLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
