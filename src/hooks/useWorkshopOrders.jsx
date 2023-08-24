import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWorkshopOrder = (email) => {
  const { data: workshopOrders, isLoading: wOLoading } = useQuery({
    queryKey: ["workshops"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/orders/${email}`
      );
      return res.data;
    },
  });
  return { workshopOrders, wOLoading };
};

export default useWorkshopOrder;
