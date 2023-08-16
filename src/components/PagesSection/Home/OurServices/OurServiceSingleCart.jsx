"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/expert.modules.css";

const ServiceSingleCard = ({ singleCard }) => {
  const { id, serviceName, image, about } = singleCard;

  return (
    <div className="cursor-pointer flex flex-col primary-shadow hover:scale-95 duration-500 pb-5 transition-all transform items-center">
      <Link href="/service">
        <Image
          className="w-full h-60"
          src={image}
          alt=""
          width="400"
          height="300"
        />
      </Link>
      <div className="flex p-3 flex-col mt-auto">
        <Link href="/service">
          <h2 className="mb-2 font-semibold hover:text-orange-600 tracking-wider">
            {serviceName}
          </h2>
          <h2 className="opacity-90 text-sm">Experience: {about}</h2>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSingleCard;
