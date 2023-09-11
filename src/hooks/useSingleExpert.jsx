import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleExpert = (id) => {
  const {
    data: expert,
    isLoading: eOLoading,
    refetch,
  } = useQuery({
    queryKey: ["mechanics"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/mechanics/${id}`
      );
      return res.data;
    },
  });
  return { expert, eOLoading, refetch };
};

export default useSingleExpert;
