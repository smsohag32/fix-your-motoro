"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "@/styles/expert.modules.css";


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
};

export default ServiceSingleCard;