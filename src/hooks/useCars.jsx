import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCars = () => {
  const { user, loading } = useAuth();

  const {
    data: carsData,
    isLoading: carLoading,
    refetch,
  } = useQuery({
    queryKey: ["carsData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/cars/${user?.email}`
      );
      return res.data;
    },
  });
  return { carsData, carLoading, refetch };
};

export default useCars;
