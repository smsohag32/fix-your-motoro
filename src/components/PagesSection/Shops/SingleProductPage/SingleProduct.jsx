"use client";

import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Spinner from "@/components/Spinners/Spinner";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const SingleProduct = ({ id }) => {
  const { user } = useAuth();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fya-backend.vercel.app/api/v1/auth/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const {
    name,
    image,
    category,
    description,
    price,
    stock,
    discount,
    discountedPrice,
    discountPercentage,
    ratting,
    likes,
    _id,
  } = product || {};

  const handleProductAddToCart = async () => {
    
    if (isAddedToCart) {
      toast.error("Product is already in the cart");
      return;
    }

    const cartData = {
      userName: user?.displayName,
      userEmail: user?.email,
      productID: _id,
      productName: name,
      productImage: image,
      description,
      quantity: 1,
      price,
    };

    axios
      .post("https://fya-backend.vercel.app/api/v1/auth/carts", cartData)
      .then((response) => {
        if (response.status === 200) {
          setIsAddedToCart(true);
          toast.success("Product added to cart successfully");
        } else {
          // Handle other status codes if needed
        }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        toast.error("Failed to add product to cart");
      });
  };


  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="">
      <PageTitle title={name} subTitle={""}></PageTitle>
      <div className="default-container py-12">
        {/* Service Area */}
        <div className="lg:flex justify-between gap-10">
          <figure>
            <Image
              className="rounded-lg shadow-md"
              src={image ? image : ""}
              alt={name}
              width={850}
              height={340}
            />
            <figcaption className="text-sm font-thin">{name}</figcaption>
          </figure>
          <div>
            <h3 className="text-4xl text-slate-950 font-extrabold tracking-wide mt-6 mb-2">
              {name}
            </h3>
            <p className="text-slate-600 text-xl font-semibold mb-12">
              {description}
            </p>
            <div className="bg-gray-300 px-8 py-4 rounded-md shadow-xl">
              <div className="md:flex items-center text-xl my-2">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Price:
                </p>
                <p className="md:pl-10">
                  :
                  <p className="md:inline md:pl-10">
                    <span className="bg-gray-400 text-black font-bold text-2xl px-4 py-1 rounded-xl ">
                      {price}
                    </span>
                  </p>
                </p>
              </div>

              <button
                onClick={handleProductAddToCart}
                className={`primary-btn ${isAddedToCart ? "disabled-btn" : ""}`}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? "Added to Cart" : "Add to Cart"}
              </button>

            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;