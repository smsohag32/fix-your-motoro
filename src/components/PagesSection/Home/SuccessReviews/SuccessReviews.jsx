import React from "react";
import StarRating from "./StarRating";

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
    <div className="p-4 bg-gray-100">
      <h1 className="">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">{review.name}</p>
            <StarRating rating={review.rating} />
            <p className="text-gray-700 mt-2">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessReviews;
