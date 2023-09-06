import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { FaStar } from "react-icons/fa"; // Import the star icon
import { Toaster } from "react-hot-toast";
import UserModal from "../Modal";

const UserFeedbackModal = ({ isOpen, setIsOpen }) => {
  const { user, profileUpdate } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [rating, setRating] = useState(0);

  const onSubmit = async (data) => {
    // Handle form submission with feedback, rating, and other data
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const handleRatingClick = (selectedRating) => {
    // Update the rating when a star is clicked
    setRating(selectedRating);

    // Set the rating in the hidden input field
    setValue("rating", selectedRating);
  };

  return (
    <UserModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Give Your Valuable Feedback"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Star Rating */}
        <div className="flex items-center mt-4">
          <span className="text-lg font-semibold mr-2">Rate Us:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={
                star <= rating
                  ? "text-yellow-400 cursor-pointer"
                  : "text-gray-300 cursor-pointer"
              }
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>

        <textarea
          id="feedback"
          name="feedback"
          {...register("feedback")}
          placeholder="Write your feedback here..."
          className="w-full h-32 mt-4 p-2 rounded-lg border focus:outline-none focus:ring focus:border-sky-600"
        />

        {/* Hidden input field for rating */}
        <input
          type="hidden"
          id="rating"
          name="rating"
          {...register("rating")}
        />

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => onCancel()}
            type="button"
            className="delete-btn rounded-lg w-full md:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full md:w-auto px-3 py-2 text-center transition-all duration-500 font-semibold bg-sky-600 text-white hover:bg-sky-800 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </UserModal>
  );
};

export default UserFeedbackModal;
