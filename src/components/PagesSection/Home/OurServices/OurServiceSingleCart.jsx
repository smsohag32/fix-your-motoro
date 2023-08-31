"use client";
import Image from "next/image";
import React from "react";
import "@/styles/expert.modules.css";

const ServiceSingleCard = ({ singleCard }) => {
  const { id, serviceName, image, about } = singleCard;

  return (
    <div className="flex flex-col items-center pb-5 transition-all duration-500 transform cursor-pointer primary-shadow hover:scale-95">
      <div>
        <Image
          className="w-full h-60"
          src={image}
          alt=""
          width="400"
          height="300"
        />
      </div>
      <div className="flex flex-col p-3 mt-auto">
        <div>
          <h2 className="mb-2 font-semibold tracking-wider hover:text-orange-600">
            {serviceName}
          </h2>
          <h2 className="text-sm opacity-90">Experience: {about}</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleCard;
