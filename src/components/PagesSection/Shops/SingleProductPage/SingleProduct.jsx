"use client";

import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Spinner from "@/components/Spinners/Spinner";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const SingleProduct = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/all/products/${id}`);
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
            <div className="bg-orange-100 px-8 py-4 rounded-md shadow-xl">
              <div className="md:flex items-center text-xl my-2">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Price: {price}
                </p>
                <p className="md:pl-10">
                  :
                  <p className="md:inline md:pl-10">
                    <span className="bg-orange-300 text-black font-bold text-2xl px-4 py-1 rounded-xl ">
                      {price}
                    </span>
                  </p>
                </p>
              </div>
              <div className="md:flex text-xl mb-2">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Product Info
                </p>
                <p className="md:pl-10">
                  :
                  <p className="md:inline md:pl-10 font-bold font-mono">
                    Discount: {discount} %
                  </p>
                </p>
              </div>

              <button
                onClick={() => toast("Coming Soon...")}
                className="primary-btn"
              >
                Add Card
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
