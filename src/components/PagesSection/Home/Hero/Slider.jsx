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
import Link from "next/link";
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.182), rgba(0, 0, 0, 0.279)),url('${image.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
              className="flex flex-col justify-center w-full h-full text-left transition-all duration-500 ease-linear gap-9 px-8"
            >
              <div className="flex flex-col gap-6 font-extrabold text-center">
                <p className="text-2xl leading-relaxed text-white md:text-4xl">
                  {image.title}
                </p>
                <h1 className="text-4xl primary-text md:text-7xl ">
                  {image.subTitle}
                </h1>
                <p className="text-2xl leading-relaxed text-white  md:3xl">
                  {image.nextLine}
                </p>
                <Link href={"/services"}>
                  <button  className="text-white outline-btn">
                    Choice Services
                  </button>
                </Link>
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
