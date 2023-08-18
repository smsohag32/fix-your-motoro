"use client";
import Image from "next/image";
import "@/app/globals.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarRating from "../PagesSection/Home/SuccessReviews/StarRating";
import MidSpinner from "../Spinners/MidSpinner";
import { useRouter } from "next/navigation";

const CardSlider = ({ items, loading }) => {
  const router = useRouter();
  return (
    <div className="default-container">
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
          {items.map((item) => (
            <SwiperSlide
              key={item._id}
              onClick={() => router.push(`/shops/${item?._id}`)}
            >
              <div className="cursor-pointer border border-gray-300 ">
                <div className="relative">
                  <Image
                    className="w-full h-48"
                    src={
                      item?.image || item?.service_image || item?.product?.image
                    }
                    alt="img"
                    width="300"
                    height="300"
                  />
                </div>
                <div className="px-5 pt-2">
                  <h2 className="name-text primary-text">{item.name}</h2>
                  {item.discount && (
                    <div className="absolute top-2 right-5 text-white rounded-full primary-bg">
                      <p className=" p-1">
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
                      <p className="ml-1">{item.rating.toFixed(1)}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold my-2">{item.name}</h3>

                  <div className="flex justify-between items-center my-2">
                    <p className="text-gray-700 opacity-90">
                      ${item.price.toFixed(2)}
                    </p>
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
