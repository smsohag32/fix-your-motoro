import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWorkshopMechanic = (email) => {
  const {
    data: workshopMechanics,
    isLoading: wOLoading,
    refetch,
  } = useQuery({
    queryKey: ["mechanics"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/mechanics/workshop/${email}`
      );
      return res.data;
    },
  });
  return { workshopMechanics, wOLoading, refetch };
};

export default useWorkshopMechanic;
