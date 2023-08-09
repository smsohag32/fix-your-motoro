"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceSingleCard = ({singleCard}) => {
    const { id, serviceName, image,  about } = singleCard;

    return (
        <div>
             <div className='card-box'>
            <Link href="/service">
                 <Image className='card-img' src={image} alt=''  width="400" height="300" />
            </Link>
            <Link href="/service">
                 <h2 className=''>{serviceName}</h2>
                 <h2 className='font-semibold'>Experience: {about}</h2>
            </Link>

        </div>
        </div>
    );
};

export default ServiceSingleCard;