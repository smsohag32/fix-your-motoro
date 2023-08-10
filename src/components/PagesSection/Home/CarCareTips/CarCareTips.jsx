"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import "./tips.css";


import tipsData from './tips.json'; // Import the JSON data

function CarCareTips() {
  const tips = tipsData.tips; // Access the tips array

return (
  <><h1 className="">Car Care Tips</h1>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {tips.map((tip) => (
          <SwiperSlide >
            <div key={tip.id} className="card bg-slate-500 ">
            <img src={tip.image} alt="tips" />
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
          </div>
          </SwiperSlide>
        ))}
    </Swiper>
  </>
);
}

export default CarCareTips;