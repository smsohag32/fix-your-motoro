import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleService = ({ service }) => {
  const {
    service_name,
    _id,
    service_image,
    service_price,
    service_description,
  } = service || {};
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50">
        <div className="relative">
          <div className="relative items-center justify-center overflow-hidden transition-shadow group hover:shadow-xl hover:shadow-black/30">
            <div className="h-72 w-96">
              <Image
                className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={service_image ? service_image : ""}
                alt=""
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
          <p className="bg-white p-1 block rounded-md absolute top-2 right-2 font-semibold hover:bg-green-300">
            {service_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
