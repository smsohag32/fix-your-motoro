import React from "react";
import StarRating from "./StarRating";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    reviewText:
      "Great service! The staff was friendly and fixed my car quickly. Highly recommended.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    reviewText:
      "I had a good experience at Fix Your Motoro. The service was efficient, and they explained everything clearly.",
  },
  {
    id: 4,
    name: "Emily Brown",
    rating: 5,
    reviewText:
      "Absolutely satisfied with their service. Quick response, professional staff, and reasonable prices.",
  },
];

const SuccessReviews = () => {
  return (
    <div className="bg-gray-50">
      <div className="default-container py-12">
        <SectionTitle
          title={"Customers Review"}
          subTitle="What to say our satisfied customer?"
        />
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white duration-500 hover:scale-x-105 primary-shadow hover-border border-gray-200 border cursor-pointer p-4 rounded-lg"
            >
              <p className="text-lg font-semibold">{review.name}</p>
              <StarRating rating={review.rating} />
              <p className="text-gray-700 mt-2">{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessReviews;
