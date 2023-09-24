"use client";
import { AiFillHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useRouter } from "next/navigation";
import StarRating from "../../Home/SuccessReviews/StarRating";
import toast, { Toaster } from "react-hot-toast";
import MidSpinner from "@/components/Spinners/MidSpinner";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Shops = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [like, setLike] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage]=useState(6)
  // const itemsPerPage = 10;

  const notify = () => toast("Coming Soon...");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/products`
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredShopData = products
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (minPrice === "" || item.price >= parseFloat(minPrice)) &&
        (maxPrice === "" || item.price <= parseFloat(maxPrice))
    )
    .slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);

  return (
    <div className="py-12 default-container">
      {loading ? (
        <MidSpinner />
      ) : (
        <div className="px-4 ">
          <div className="mb-4 ">
            <input
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#69d94f]"
            />
            <div>
              <div className="flex flex-col md:flex-row gap-3 md:items-center w-full">
                <p className="">Price range: </p>

                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="border p-2 rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#69d94f]"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="p-2 border rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#69d94f]"
                />
              </div>
              <div className="flex items-center gap-3 my-2">
                <p>Product per page: </p>
                <input
                  type="number"
                  placeholder="Items PerPage"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(e.target.value)}
                  className="p-2 mr-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#69d94f]"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredShopData.map((item) => (
              <div
              
                key={item._id}
                className="relative p-5 transition bg-white rounded-lg border hover:border-gray-300 shadow-md sm:p-6 hover:bg-gray-300 duration-300"
              >
                <div data-aos="zoom-in" className="mt-2 aspect-w-3 aspect-h-2">
                  <Image
                    src={item.image}
                    alt={item.title || "product-image"}
                    width={800}
                    height={600}
                    className="mb-4 rounded-md hover:rounded-none border"
                  />
                </div>
                <div className="absolute bg-yellow-400 border rounded-full top-9 right-8">
                  <p className="p-1 text-gray-700">
                    {item.discount ? (
                      <span>{item.discountPercentage}%</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="">
                  <div className="flex mr-2">
                    <StarRating rating={item.rating} />
                    <p className="ml-1">{item.rating.toFixed(1)}</p>
                  </div>
                </div>
                <div className="absolute top-2 left-5">
                  {/* <div className="flex items-center justify-center mr-2">
                    <div
                      onClick={() => setLike(!like)}
                      className="flex p-2 text-2xl"
                    >
                      <AiFillHeart
                        className={like ? "text-red-500" : "text-gray-500"}
                      />
                    </div>
                    <p className="ml-1">{item.rating.toFixed(1)}</p>
                  </div> */}
                </div>
                <h3 className="my-2 text-lg font-semibold">{item.name}</h3>

                <div className="flex items-center justify-between my-2">
                  <button
                    onClick={() => router.push(`/shops/${item?._id}`)}
                    className="rounded-md primary-btn"
                  >
                    Detail
                  </button>
                  <Toaster />
                  <p className="text-gray-700 font-medium">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2 rounded-md primary-btn"
            >
              <FaLessThan />
            </button>
            <p>
              {currentPage} of {totalPages}
            </p>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= products.length}
              className="ml-2 rounded-md primary-btn"
            >
              <FaGreaterThan />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shops;
