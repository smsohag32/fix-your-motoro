"use client";
import { AiFillHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StarRating from "../../Home/SuccessReviews/StarRating";

const Shops = () => {
  const router= useRouter()
  const [shopData, setShopData] = useState([]);
  const [like, setLike] = useState(true);

  useEffect(() => {
    fetch("/data/shop.json")
      .then((res) => res.json())
      .then((data) => setShopData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="default-container">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shopData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-5 sm:p-6 relative transition hover:bg-red-50"
            >
              <div className="aspect-w-3 aspect-h-2 mt-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="mb-4"
                />
              </div>
              <div className="absolute top-2 right-5 border rounded-full bg-yellow-400">
                <p className="text-gray-700 p-1">
                  {item.discount ? <span>{item.discountPercentage}%</span> : ""}
                </p>
              </div>
              <div className="">
                <div className="flex mr-2">
                  <StarRating rating={item.rating} />
                  <p className="ml-1">{item.rating.toFixed(1)}</p>
                </div>
              </div>
              <div className="absolute top-2 left-5">
                <div className="flex mr-2 items-center justify-center">
                  <div
                    onClick={() => setLike(!like)}
                    className="flex p-2 text-2xl"
                  >
                    <AiFillHeart
                      className={like ? "text-red-500" : "text-gray-500"}
                    />
                  </div>
                  <p className="ml-1">{item.rating.toFixed(1)}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold my-2">{item.title}</h3>

              <div className="flex justify-between items-center my-2">
                <button
                  onClick={() => router.push(`/shops/${item.id}`)}
                  className="primary-btn"
                >
                  View Details
                </button>

                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
