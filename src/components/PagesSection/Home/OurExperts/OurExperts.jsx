"use client";
import React, { useState, useEffect } from "react";
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

import NewsModal from "./OurExpertModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MidSpinner from "@/components/Spinners/MidSpinner";

const ExpertSection = () => {
  const [ourExpert, setOurExpert] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  {
    /*json data fetch section */
  }
  useEffect(() => {
    setLoading(true);
    fetch("/data/expert.json")
      .then((res) => res.json())
      .then((data) => setOurExpert(data))
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
    setLoading(false);
  }, []);

  const expertLimit = 6;
  return (
    <div className="default-container mt-20">
      <SectionTitle
        title={"Our Experts"}
        subTitle={"Ready all time to provide motor servicing"}
      />
      {loading ? (
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mt-8 mySwiper"
        >
          {ourExpert.slice(0, expertLimit).map((article) => (
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
                  <h2 className="name-text primary-text">{article.name}</h2>
                  <h2 className="specialty-text">- {article.specialty} -</h2>
                  <div className="icone">
                    <FaFacebookSquare className="text-[#f02801] hover:text-[#bb3f26e7] " />
                    <FaTwitterSquare className="text-[#f02801] hover:text-[#bb3f26e7]" />
                    <FaInstagramSquare className="text-[#f02801] hover:text-[#bb3f26e7]" />
                    <FaLinkedin className="text-[#f02801] hover:text-[#bb3f26e7]" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {/* <NewsModal
        isOpen={selectedArticle !== null}
        closeModal={closeModal}
        article={selectedArticle || {}}
      /> */}
    </div>
  );
};

export default ExpertSection;
