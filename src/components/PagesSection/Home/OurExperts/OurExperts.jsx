"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/expert.modules.css";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

  {
    /*slider*/
  }
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="py-12 default-container">
      <SectionTitle title={"Our Exparts"} />
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="my-12 mySwiper"
      >
        {ourExpert.slice(0, expertLimit).map((singleCard, index) => (
          <SwiperSlide key={index}>
            <div className="card-box">
              <Link href="/expert">
                <Image
                className=""
                  src={singleCard.img}
                  alt="img"
                  width="1000"
                  height="300"
                />
              </Link>
              <Link href="/expert">
                <h2 className="name-text primary-text">{singleCard.name}</h2>
                <h2 className="specialty-text">- {singleCard.specialty} -</h2>
                <div className="icone">
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaInstagramSquare />
                  <FaLinkedin />
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
