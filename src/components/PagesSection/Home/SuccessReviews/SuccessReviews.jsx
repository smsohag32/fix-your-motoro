"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarRating from "./StarRating";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Spinner from "@/components/Spinners/Spinner";
import useReviews from "@/hooks/useReviews";
import Image from "next/image";



const SuccessReviews = () => {
  useEffect(() => {
    AOS.init({    });
  }, []);
  
  const { reviews, rLoading } = useReviews();
  if (rLoading) {
    return <Spinner />;
  }
  
  // review dynamically added

  return (
    <div data-aos="fade-left" className="bg-gray-50">
      <div className="py-12 default-container">
        <SectionTitle
          title={"Customers Review"}
          subTitle="What to say our satisfied customer?"
        />
        <div  className="container">
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {reviews?.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-4 duration-500 bg-white border border-gray-200 rounded-lg cursor-pointer hover:scale-x-105 primary-shadow hover-border"
              >
                <div className="flex items-center gap-5">
                  <figure>
                    <Image
                      className="rounded-full"
                      src={review.user_img}
                      alt="User Pic"
                      height={60}
                      width={60}
                    />
                  </figure>
                  <div>
                    <p className="text-lg font-semibold">{review.user_name}</p>
                    <StarRating rating={review.rating} />
                    <p className="mt-2 text-gray-700">
                      {review.review.length > 30
                        ? review.review.slice(0, 30) + "..."
                        : review.review}
                    </p>
                  </div>
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
