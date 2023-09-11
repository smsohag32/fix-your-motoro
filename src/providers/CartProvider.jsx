"use client";

import CartContext from "@/context/CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  return (
    <CartContext.Provider
      value={{
        cartData, 
        setCartData, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
