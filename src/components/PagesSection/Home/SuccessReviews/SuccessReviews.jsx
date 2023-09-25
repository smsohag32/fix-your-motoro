"use client"
import React, { useEffect } from "react";
import StarRating from "./StarRating";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useReviews from "@/hooks/useReviews";
import Spinner from "@/components/Spinners/Spinner";
import Image from "next/image";

const SuccessReviews = () => {
  const { reviews, rLoading } = useReviews();
  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);

  if (rLoading) {
    return <Spinner />;
  }
  

  const lastThreeReviews = reviews.slice(-3);

  return (
    <div className="default-container">
      <div className="py-12">
        <SectionTitle
          title={"Customers Review"}
          subTitle="What to say our satisfied customer?"
        />
        <div className="container">
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {lastThreeReviews.map((review) => (
              <div
              data-aos="fade-up"
                key={review._id}
                className="duration-500 hover:z-10 primary-shadow hover:border-[#69d94f] border-gray-200 border cursor-pointer p-4 rounded-lg flex flex-col items-center justify-center group"
              >
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border border-gray-500 transition-all duration-300" />
                  <Image
                    src={review.user_img}
                    alt="customer"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full group-hover:border-[#69d94f]"
                  />
                </div>
                <div className="flex flex-col justify-center items-center mt-2">
                  <p className="text-lg font-semibold">{review.user_name}</p>
                  <StarRating rating={review.rating} />
                  <p className="mt-2">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessReviews;
