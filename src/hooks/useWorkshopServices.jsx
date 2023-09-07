import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useWorkshopServices = () => {
  const { user, loading } = useAuth();
  const {
    data: workshopServices,
    isLoading: wOLoading,
    refetch,
  } = useQuery({
    queryKey: ["workshops", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/services/workshops/${user?.email}`
      );
      return res.data;
    },
  });
  return { workshopServices, wOLoading, refetch };
};

export default useWorkshopServices;
