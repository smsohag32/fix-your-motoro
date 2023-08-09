import { AiFillStar } from "react-icons/ai";
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 fill-current ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <AiFillStar />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
