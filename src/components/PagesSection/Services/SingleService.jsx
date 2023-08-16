import Image from "next/image";
import React from "react";

const SingleService = (props) => {
  console.log(props.service);
  const { service_name, service_image, service_description } = props.service;
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={service_image}
                alt=""
                width={384}
                height={288}
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 pb-12 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-serif text-3xl font-bold text-white">
                {service_name}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {service_description}
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* <div class="fixed bottom-16">
          <p class="font-com text-2xl font-semibold text-white">
            All Images are from{" "}
            <a href="https://unsplash.com" class="text-blue-500">
              Unsplash.com
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SingleService;
