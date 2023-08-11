"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/expert.modules.css";
import "@/app/globals.css";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

import {  Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ExpertSection = () => {
  const [ourExpert, setOurExpert] = useState([]);

 

  {
    /*json data fetch section */
  }
  useEffect(() => {
    fetch("/data/expert.json")
      .then((res) => res.json())
      .then((data) => setOurExpert(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  {
    /*slice section*/
  }
  const expertLimit = 6;
  return (
<<<<<<< HEAD
    <div className="container py-12">
       <SectionTitle
          title={"Our Expert"}
          subTitle="What to say our satisfied customer?"
        />
=======
    <div className="default-container py-12">
      <SectionTitle
        title={"Our Exparts"}
        subTitle={"Ready all time to provide motor servicing"}
      />
>>>>>>> 4fb5c2c9340ab025db3653ce0e2fa3b0dba5c6bd
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
<<<<<<< HEAD
        modules={[Autoplay , Pagination]}
        className="mySwiper"
=======
        modules={[Autoplay, Pagination]}
        className="mySwiper my-12"
>>>>>>> 4fb5c2c9340ab025db3653ce0e2fa3b0dba5c6bd
      >
        {ourExpert.slice(0, expertLimit).map((singleCard, index) => (
          <SwiperSlide key={index}>
            <div className="my-4 card-box primary-shadow">
              <Link href="/expert">
                <Image
<<<<<<< HEAD
=======
                  className="card-img w-full h-60"
>>>>>>> 4fb5c2c9340ab025db3653ce0e2fa3b0dba5c6bd
                  src={singleCard.img}
                  alt="img"
                  width="300"
                  height="300"
                />
              </Link>
              <Link href="/expert">
                <h2 className="name-text primary-text">{singleCard.name}</h2>
                <h2 className="specialty-text">- {singleCard.specialty} -</h2>
                <div className="icone">
                  <FaFacebookSquare className="hover:bg-[#f02801] hover:text-white" />
                  <FaTwitterSquare className="hover:bg-[#f02801] hover:text-white" />
                  <FaInstagramSquare className="hover:bg-[#f02801] hover:text-white" />
                  <FaLinkedin className="hover:bg-[#f02801] hover:text-white" />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExpertSection;
