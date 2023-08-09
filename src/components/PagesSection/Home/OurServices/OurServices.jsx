"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import OurServiceSingleCart from "./OurServiceSingleCart";
import "@/styles/expert.modules.css";


const Services = () => {
    const [service, setService] = useState([])

    
    useEffect(() => {
        fetch("/data/service.json")
            .then(res => res.json())
            .then(data => setService(data))
            .catch(error => {
                console.error("Error fetching data:", error);
            })
    }, [])
    {/*slice secrtion */}
    const expertLimit = 6;
    return (
        <div className='max-w-[1250px] mx-auto'>
            <h1 className='my-5 text-5xl font-bold text-center'>Our Services</h1>
            <div className='card-section'>
                {/*json map section*/}
                {
                    service.slice(0, expertLimit).map((singleCard, index) => (<OurServiceSingleCart key={index} singleCard={singleCard}></OurServiceSingleCart>))
                }
            </div>
            {/* see all btn Connect service section */}
                <p className='primary-btn-position-center'><Link href="/service" className='primary-btn'>See All</Link></p>
        </div>
    );
};

export default Services;