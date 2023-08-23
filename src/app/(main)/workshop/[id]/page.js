"use client"
import StarRating from "@/components/PagesSection/Home/SuccessReviews/StarRating";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WorkShopDetail = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  // console.log(params.id);
  const _id = params.id;
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/workshops/${_id}`
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
  }, [_id]);
  // api data console.log
  console.log(products);

  return (
    <div className="mt-36 p-5">
      <div className="flex gap-5">
        <Image
          className=" object-cover transition-transform duration-500"
          src={products.image}
          alt={products.name}
          width={384}
          height={288}
        />
        <div>
          <p>{products.name}</p>
          <p>workshop Code:{products.workshopCode}</p>
          <p>Email: {products.email}</p>
          <div className="flex mr-2">
            <StarRating rating={products.rating} />
            <p className="ml-1">{products.rating}</p>
          </div>
        </div>
      </div>
      <p>{products.address}</p>
      <p className="mt-3">workshop Details: {products.description}</p>
    </div>
  );
};

export default WorkShopDetail;
