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
      <div className="py-12 default-container">
        <SectionTitle
          title={"Customers Review"}
          subTitle="What to say our satisfied customer?"
        />
        <div className="container">
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 duration-500 bg-white border border-gray-200 rounded-lg cursor-pointer primary-shadow hover-border"
            >
              <p className="text-lg font-semibold">{review.name}</p>
              <StarRating rating={review.rating} />
              <p className="mt-2 text-gray-700">{review.reviewText}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessReviews;
