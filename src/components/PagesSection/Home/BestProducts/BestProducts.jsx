"use client";
import CardSlider from "@/components/CardsSlider/CardsSlider";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React, { useEffect, useState } from "react";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/all/products");
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
        <SectionTitle
          title="Top-selling products"
          subTitle="Discover the most sought-after products that keep your vehicles running smoothly."
        />
        <CardSlider loading={loading} items={products} />
      </div>
    </div>
  );
};

export default BestProducts;
