"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/expert.modules.css";

const ServiceSingleCard = ({ singleCard }) => {
  const { id, serviceName, image, about } = singleCard;

<<<<<<< HEAD
const ServiceSingleCard = ({singleCard}) => {
    const { id, serviceName, image,  about } = singleCard;

    return (
        <div>
             <div className='card-box'>
            <Link href="/service">
                 <Image className='card-img' src={image} alt=''  width="400" height="300" />
            </Link>
            <div className="p-2">
                 <h2 className='my-2 text-2xl font-semibold text-[#f02801]'>{serviceName}</h2>
                 <h2 className='font-semibold'>Experience: {about}</h2>
            </div>
        </div>
        </div>
    );
=======
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
>>>>>>> 4fb5c2c9340ab025db3653ce0e2fa3b0dba5c6bd
};

export default ServiceSingleCard;
