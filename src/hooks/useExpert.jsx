import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useExperts = () => {
  const {
    data: workshopMechanics,
    isLoading: wOLoading,
    refetch,
  } = useQuery({
    queryKey: ["experts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/mechanics`
      );
      return res.data;
    },
  });
  return { workshopMechanics, wOLoading, refetch };
};

export default useExperts;
