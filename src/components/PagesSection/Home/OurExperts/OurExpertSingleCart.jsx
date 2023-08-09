"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurExpertSingleCard = ({ singleCard }) => {
    const { id, name, specialty, experience, img, about } = singleCard;
    return (
        <div className='card-box'>
            <Link href="/expert">
                 <Image className='card-img' src={img} alt=''  width="400" height="300" />
            </Link>
            <Link href="/expert">
                 <h2 className='mt-4 text-2xl font-semibold'>{name}</h2>
                 <h2 className='font-semibold'>Experience: {experience}</h2>
                 <h2 className='font-semibold'>Expert: {specialty}</h2>
                 <h2 className='text-justify'>{about}</h2>
                 <button className='primary-btn'>view</button>
            </Link>
        </div>
    );
};

export default OurExpertSingleCard;