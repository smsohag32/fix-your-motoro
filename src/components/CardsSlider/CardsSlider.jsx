"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarRating from "../PagesSection/Home/SuccessReviews/StarRating";
import MidSpinner from "../Spinners/MidSpinner";
import { useRouter } from "next/navigation";


const CardSlider = ({ items, loading, workshops }) => {
  // use aos 
  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);
  
  const router = useRouter();


  return (
    <div data-aos="fade-up-right" className="default-container">
      {loading ? (
        <MidSpinner />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mt-8 mySwiper"
        >
          {items &&
            items.map((item) => (
              <SwiperSlide
                key={item._id}
                onClick={() => router.push(`/shops/${item?._id}`)}
              >
                <div className="border border-gray-300 cursor-pointer ">
                  <div className="relative">
                    <Image
                      className="w-full h-48"
                      src={
                        item?.image ||
                        item?.service_image ||
                        item?.product?.image
                      }
                      alt="img"
                      width="300"
                      height="192"
                    />
                  </div>
                  <div className="px-5 pt-2">
                    <h2 className="primary-text">{item.name}</h2>
                    {item.discount && (
                      <div className="absolute text-white rounded-full top-2 right-5 primary-bg">
                        <p className="p-1 ">
                          {item.discount ? (
                            <span>{item.discountPercentage}%</span>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    )}
                    <div className="">
                      <div className="flex mr-2">
                        <StarRating rating={item.rating} />
                        <p className="ml-1">{item?.rating.toFixed(1)}</p>
                      </div>
                    </div>
                    <h3 className="my-2 text-lg font-semibold">{item.name}</h3>

                    <div className="flex items-center justify-between my-2">
                      <p className="text-gray-700 opacity-90">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          {workshops &&
            workshops.map((item, index) => (
              <SwiperSlide
                key={item._id}
                onClick={() => router.push(`/workshop/${item?._id}`)}
              >
                <div className="flex flex-col border border-gray-300 cursor-pointer h-80 ">
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-full h-48 transition-all duration-500 transform hover:scale-105"
                      src={
                        item?.image ||
                        item?.service_image ||
                        item?.product?.image
                      }
                      alt={index}
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="flex flex-col px-5 pt-2 mt-auto">
                    <h2 className="font-semibold ">{item.name}</h2>
                    {item.address && (
                      <div className="absolute text-white rounded-full top-2 right-5 primary-bg">
                        <p className="p-1 ">
                          {item.address ? <span>{item.address}</span> : ""}
                        </p>
                      </div>
                    )}
                    <div className="pb-4 mt-auto">
                      <div className="flex mr-2">
                        <StarRating rating={item?.rating} />
                        <p className="ml-1">{item?.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default CardSlider;
