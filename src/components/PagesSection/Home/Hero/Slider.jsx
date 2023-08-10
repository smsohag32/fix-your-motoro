"use client";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/hero.modules.css";
import imageData from "@/utils/data/imageData";
// import required modules

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        className="mySwiper"
      >
        {imageData.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.582), rgba(0, 0, 0, 0.679)),url('${image.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
              className="flex flex-col transition-all duration-500 ease-linear gap-9 h-full default-container justify-center text-left w-full ms-10"
            >
              <div className="text-center font-extrabold flex flex-col gap-6">
                <p className="text-2xl md:text-4xl leading-relaxed text-white">
                  {image.title}
                </p>
                <h1 className="primary-text  text-4xl md:text-7xl ">
                  {image.subTitle}
                </h1>
                <p className=" text-white text-2xl leading-relaxed md:3xl">
                  {image.nextLine}
                </p>
                <div className="">
                  <button className="outline-btn text-white">
                    Choice Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
