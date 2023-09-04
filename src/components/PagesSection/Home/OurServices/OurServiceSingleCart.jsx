"use client";
import Image from "next/image";
import React from "react";
import "@/styles/expert.modules.css";
import Link from "next/link";

const ServiceSingleCard = ({ service }) => {
  const { service_name, _id, service_image, service_description } =
    service || {};

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50">
        <div className="">
          <div className="relative items-center justify-center overflow-hidden transition-shadow group hover:shadow-xl hover:shadow-black/30">
            <div className="h-72 w-96">
              <Image
                className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={service_image ? service_image : ""}
                alt="service image"
                width={384}
                height={288}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 pb-12 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-serif text-3xl font-bold text-white">
                {service_name}
              </h1>
              <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {service_description}
              </p>
              <Link href={`/services/${_id}`}>
                <button className="primary-btn">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleCard;
