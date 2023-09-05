"use client";
import CardSlider from "@/components/CardsSlider/CardsSlider";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React, { useEffect, useState } from "react";

const BestProducts = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fya-backend.vercel.app/api/v1/auth/products"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-[60vh]">
      <div className="default-container">
        {children}
        <CardSlider loading={loading} items={products} />
      </div>
    </div>
  );
};

export default BestProducts;
