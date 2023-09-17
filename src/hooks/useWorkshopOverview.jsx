import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWorkshopOverview = (email) => {
  const { data: workshopData, isLoading: wLoading } = useQuery({
    queryKey: ["workshop"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/workshop/summary/${email}`
      );
      return res.data;
    },
  });
  return { workshopData, wLoading };
};

export default useWorkshopOverview;
