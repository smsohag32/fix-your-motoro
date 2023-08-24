import React from "react";
import Image from "next/image";

const SingleProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="relative  mb-2">
        <Image
          src={product?.image}
          alt={product?.title}
          width={150}
          height={150}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{product?.title}</h2>
      <p className="text-sm text-gray-500 mb-2">${product?.rate}</p>
      <p className="text-sm text-gray-600">{product?.description}</p>
      {/* <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          // Handle button click
        }}
      >
        View Details
      </button> */}
    </div>
  );
};

export default SingleProductCard;
