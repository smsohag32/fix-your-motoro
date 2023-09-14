"use client";
import Spinner from "@/components/Spinners/Spinner";
import useReviews from "@/hooks/useReviews";
import Image from "next/image";
import { reverseArray } from "pdf-lib";
import React from "react";

const Reviews = () => {
  const { reviews, rLoading } = useReviews();
  if (rLoading) {
    return <Spinner />;
  }
  return (
    <div className="md:my-16">
      <div>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <div key={idx}>
              <div className="bg-white p-4 m-4 rounded-lg shadow-md">
                <div className="md:flex items-center mb-2">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={280}
                    height={250}
                    className=" mr-4"
                  />
                  <div>
                    <p className="font-bold text-lg">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.name}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-yellow-400 flex">
                    {/* You can use rating to display stars */}
                    {Array.from({ length: review.rating }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.192-3.047-2.97a.75.75 0 01.416-1.28l4.21-.611 1.883-3.815a.75.75 0 011.345 0zm-1.204 2.28l-1.55 3.136-.798 1.545a.75.75 0 01-.672.41h-.001a.75.75 0 01-.672-.41l-.799-1.545-1.55-3.135a.75.75 0 01.318-.92l1.293-.793.57-1.305a.75.75 0 011.364 0l.571 1.305 1.293.793a.75.75 0 01.318.92z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 ml-2">{review.rating}/5</p>
                </div>
                <p className="mt-4">{review.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p> No Reviews Available Now</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
