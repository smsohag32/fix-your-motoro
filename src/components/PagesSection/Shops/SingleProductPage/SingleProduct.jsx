"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Spinner from "@/components/Spinners/Spinner";
import useAuth from "@/hooks/useAuth";
import useCartProducts from "@/hooks/useCartProducts";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const SingleProduct = ({ id }) => {
  const { user } = useAuth();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { refetch } = useCartProducts();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
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

    if (user) {
      try {
        const response = await axios.post(`https://fya-backend.vercel.app/api/v1/auth/carts/${user?.email}`, cartData);
        if (response.data == "add product successfully") {
          toast.success("product added to cart successfully");
          refetch();
        } else if (response.data.message == "Product already in the cart") {
          toast.success("Product already added to cart")
        }



      } catch (error) {
        console.log(error)
      }
    } else {
      toast.success("Please login first to add product");
      return;
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="">
      <PageTitle title={name} subTitle={""}></PageTitle>
      <div className="default-container pb-8">
        {/* Service Area */}
        <div className="lg:flex justify-between gap-10">
          <figure>
            <Image
              className="rounded-lg border  shadow-md"
              src={image ? image : ""}
              alt={name}
              width={850}
              height={340}
            />
            <figcaption className="text-sm font-thin">{name}</figcaption>
          </figure>
          <div className="flex flex-col justify-center ">
            <div>
              <h3 className="text-4xl text-slate-950 font-extrabold tracking-wide mt-4 md:mt-0 mb-2">
                {name}
              </h3>
              <p className="text-slate-600 text-xl font-semibold mb-5">
                {description}
              </p>
              <p className="text-slate-600 text-xl font-bold mb-3">
                Stock: {stock}
              </p>
              <div className="bg-gray-300 px-8 py-4 rounded-md shadow-xl">
                <div className="md:flex items-center text-xl my-2">
                  <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                    Price:
                  </p>
                  <p className="md:pl-10">

                    <span className="md:inline md:pl-10">
                      <span className="bg-gray-400 text-black font-bold text-2xl px-4 py-1 rounded-xl ">
                        ${price}
                      </span>
                    </span>
                  </p>
                </div>

                <button
                  onClick={handleProductAddToCart}
                  className={`primary-btn`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
