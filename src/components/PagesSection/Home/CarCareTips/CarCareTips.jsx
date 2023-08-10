"use client"
import TipsModal from './TipsModal'; 
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import "./tips.css";
import "../RecentNews/news.css";

import tipsData from './tips.json'; // Import the JSON data

function CarCareTips() {
  const tips = tipsData.tips; // Access the tips array
  const [selectedTip, setSelectedTip] = useState(null);


  const openModal = (tip) => {
    setSelectedTip(tip);
  };

  const closeModal = () => {
    setSelectedTip(null);
  };
return (
  <><h1 className="">Car Care Tips</h1>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <div className="container">
    {tips.map((tip) => (
          <SwiperSlide >
           <div key={tip.id} 
          className="flex card" 
          onClick={() => openModal(tip)}
          >
            <img src={tip.image} alt="tips" />
           <div className='ml-12  text-justify text-black-800'>
           <h2>{tip.title}</h2>
            <p className='mt-12 text-black-800'>Tips Details: <br />{tip.description}</p>
            </div> 
          </div>
          </SwiperSlide>
        ))}
         </div>
    </Swiper>
    <TipsModal
        isOpen={selectedTip !== null}
        closeModal={closeModal}
        tip={selectedTip || {}}
      />
  </>
);
}

export default CarCareTips;