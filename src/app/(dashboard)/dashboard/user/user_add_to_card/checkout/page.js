"use client";

import React from "react";
import ProceedToCheckout from "@/components/dashboard/UserDashboard/ProceedToCheckout/ProceedToCheckout";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const { selectedProductIds, selectedProductData } = router.query || {};
  console.log(selectedProductIds);
  console.log(selectedProductData);

  // Convert the selectedProductData string back to an array of objects
  const selectedProducts = selectedProductData
    ? JSON.parse(selectedProductData)
    : [];
  console.log(selectedProducts);
  return (
    <div>
      {/* Pass the received data as props to the ProceedToCheckout component */}
      <ProceedToCheckout
        selectedProductIds={selectedProductIds}
        selectedProducts={selectedProducts}
      />
    </div>
  );
};

export default CheckoutPage;
