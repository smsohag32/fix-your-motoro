import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReviews = () => {
  const { data: reviews, isLoading: rLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/reviews/`
      );
      return res.data;
    },
  });
  return { reviews, rLoading };
};

export default useReviews;
