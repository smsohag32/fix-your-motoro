import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import './Tips.css';
import '../RecentNews/news.css';
import tipsData from './tips.json';

const CarCareTips = () => {
  const tips = tipsData.tips;
  return (
    
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
      <div className="container">
     
        { tips.map((article) => (
             <div key={tips.id} className="tips-slide">
            <h2>{tips.title}</h2>
            <p>{tips.description}</p>
          </div>
          
        ))}
          
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default CarCareTips;
