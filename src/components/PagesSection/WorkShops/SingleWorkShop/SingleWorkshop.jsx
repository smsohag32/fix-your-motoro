"use client";
import Image from "next/image";
import React, { useState } from "react";
import WorkshopDetails from "../WorkshopDetails/WorkshopDetails";
import StarRating from "../../Home/SuccessReviews/StarRating";
import { useRouter } from "next/navigation";

const SingleWorkshop = (props) => {
  const { name, _id, image, phone, email, address, rating } =
    props.workshopsData;
  const router = useRouter();
  
  return (
    <div onClick={() => router.push(`/workshop/${_id}`)}>
      <div className="mx-auto  bg-gray-50">
        <div>
          <div className="p-3  cursor-pointer ">
            <div className="h-80 mt-5 relative">
              <Image
                className="h-full w-full object-cover transition-transform duration-500"
                src={image}
                alt={name}
                width={384}
                height={288}
              />
              <div className="absolute top-4 left-5 bg-red-500 text-white shadow-emerald-50 rounded-md">
                <p className="py-2 px-3">{address}</p>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">{name}</p>
              <p>{email}</p>
              <div className="">
                <div className="flex mr-2">
                  <StarRating rating={rating} />
                  <p>{rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkshop;
