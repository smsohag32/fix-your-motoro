"use client";
import React, { useState, useEffect } from "react";
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
  const { workshopMechanics, wOLoading, refetch } = useExperts();

  return (
    <div className="mt-20 default-container">
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
                    <FaFacebookSquare className="primary-text " />
                    <FaTwitterSquare className="primary-text" />
                    <FaInstagramSquare className="primary-text" />
                    <FaLinkedin className="primary-text" />
                  </div>
                </div>
                <div className="flex justify-center md:justify-end items-center p-2">
                  <Link href={`/expert/${article._id}`}>
                    <AiOutlineArrowRight className="primary-text text-4xl bg-red-200 p-1 rounded-full" />{" "}
                  </Link>
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
