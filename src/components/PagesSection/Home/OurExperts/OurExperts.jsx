"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import "@/styles/expert.modules.css";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useExperts from "@/hooks/useExpert";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const ExpertSection = () => {
   // use aos 
   useEffect(() => {
    AOS.init({});
  }, []);
  
  const { workshopMechanics, wOLoading, refetch } = useExperts();

  return (
    <div data-aos="fade-down" className="mt-20 default-container">
      <SectionTitle
        title={"Our Experts"}
        subTitle={"Ready all time to provide motor servicing"}
      />
      {wOLoading ? (
        <MidSpinner />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
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
          {workshopMechanics?.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="cursor-pointer card-box ">
                <div>
                  <Image
                    className="w-full h-60"
                    src={article.img}
                    alt="img"
                    width="300"
                    height="300"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold name-text">
                    {article.name}
                  </h2>
                  <h2 className="specialty-text">- {article.specialty} -</h2>
                  <div className="icone">
                    <FaFacebookSquare className="text-blue-500 " />
                    <FaTwitterSquare className="text-blue-500" />
                    <FaInstagramSquare className="text-blue-500" />
                    <FaLinkedin className="text-blue-500" />
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 md:justify-end">
                  <Link href={`/expert/${article._id}`}>
                    <AiOutlineArrowRight className="p-1 text-2xl rounded-full primary-text" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ExpertSection;
