"use client";
import Image from "next/image";
import React, { useState } from "react";
import StarRating from "../../Home/SuccessReviews/StarRating";
import { useRouter } from "next/navigation";

const WorkshopCard = (props) => {
  const { name, _id, image, phone, email, address, rating } =
    props.workshopsData;
  const router = useRouter();
  
  return (
    <div className="secondary-border h-full">
      <div className="w-full bg-gray-50 h-full">
        <div >
          <div className=" cursor-pointer ">
            <div className="h-80 relative">
              <Image
                className="h-80 w-full object-cover transition-transform duration-500"
                src={image}
                alt="zzxv"
                width={384}
                height={288}
              />
              <div className="absolute top-4 left-5 bg-red-500 text-white shadow-emerald-50">
                <p className="py-2 px-3">{address}</p>
              </div>
            </div>
            <div className="p-5 flex justify-between items-center flex-col md:flex-row">
              <div>
              <p className="text-xl font-semibold mb-2">{name}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <div className="">
                <div className="flex mr-2">
                  <StarRating rating={rating} />
                  <p>{rating}</p>
                </div>
              </div>
              </div>
              <div className="">
                <button onClick={() => router.replace(`/workshop/${_id}`)} className="primary-btn">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
