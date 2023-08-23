"use client";
import { AiFillHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBeer, FaGreaterThan, FaLessThan } from "react-icons/fa";
// import { useRouter } from "next/navigation";
import StarRating from "../../Home/SuccessReviews/StarRating";
import toast, { Toaster } from "react-hot-toast";

const Shops = () => {
  // const router = useRouter();
  const [shopData, setShopData] = useState([]);
  const [like, setLike] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const notify = () => toast("Coming Soon...");

  useEffect(() => {
    fetch("https://fya-backend.vercel.app/api/v1/auth/products")
      .then((res) => res.json())
      .then((data) => setShopData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredShopData = shopData
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (minPrice === "" || item.price >= parseFloat(minPrice)) &&
        (maxPrice === "" || item.price <= parseFloat(maxPrice))
    )
    .slice(startIndex, endIndex);

  const totalPages = Math.ceil(shopData.length / itemsPerPage);

  return (
    <div className="default-container py-12">
      <div className=" px-4">
        <div className="flex mb-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border p-2"
          />
        </div>
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredShopData.map((item) => (
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
              <h3 className="text-lg font-semibold my-2">{item.name}</h3>

              <div className="flex justify-between items-center my-2">
                {/* <button
                  onClick={() => router.push(`/shops/${item.id}`)}
                  className="primary-btn"
                >
                  View Details
                </button> */}
                <button onClick={notify} className="primary-btn">
                  Add to Card
                </button>
                <Toaster />
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 primary-btn"
          >
            <FaLessThan />
          </button>
          <p>
            {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= shopData.length}
            className="ml-2 primary-btn"
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shops;
