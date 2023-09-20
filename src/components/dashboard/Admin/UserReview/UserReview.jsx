"use client";
import StarRating from "@/components/PagesSection/Home/SuccessReviews/StarRating";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useReviews from "@/hooks/useReviews";
import Image from "next/image";

const UserReview = () => {
    const { reviews, rLoading } = useReviews();
    console.log(reviews);

  return (
    <div className="min-h-screen px-5 md:px-8 bg-gray-100 py-8 ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          User Reviews
        </h2>
        {rLoading ? (
          <MidSpinner />
        ) : (
          <div>
            {reviews.map((review) => (
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
        )}
      </div>
    </div>
  );
};

export default UserReview;
