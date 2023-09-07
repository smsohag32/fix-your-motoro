import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useWorkshopMechanic = () => {
  const { user, loading } = useAuth();
  const {
    data: workshopMechanics,
    isLoading: wOLoading,
    refetch,
  } = useQuery({
    queryKey: ["mechanics"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/workshop/summary/${user?.email}`
      );
      return res.data;
    },
  });
  return { workshopMechanics, wOLoading, refetch };
};

export default useWorkshopMechanic;
