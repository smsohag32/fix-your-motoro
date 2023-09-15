"use client";
import StarRating from "./StarRating";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Spinner from "@/components/Spinners/Spinner";
import useReviews from "@/hooks/useReviews";

const SuccessReviews = () => {
  const { reviews, rLoading } = useReviews();
  if (rLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-gray-50">
      <div className="py-12 default-container">
        <SectionTitle
          title={"Customers Review"}
          subTitle="What to say our satisfied customer?"
        />
        <div className="container">
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {reviews?.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white duration-500 hover:scale-x-105 primary-shadow hover-border border-gray-200 border cursor-pointer p-4 rounded-lg"
              >
                <p className="text-lg font-semibold">{review.user_name}</p>
                <StarRating rating={review.rating} />
                <p className="mt-2 text-gray-700">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessReviews;
