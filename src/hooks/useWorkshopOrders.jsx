import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useWorkshopOrder = () => {
  const { user, loading } = useAuth();
  const {
    data: workshopOrders,
    isLoading: wOLoading,
    refetch,
  } = useQuery({
    queryKey: ["workshops", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/orders/${user?.email}`
      );
      return res.data;
    },
  });
  return { workshopOrders, wOLoading, refetch };
};

export default useWorkshopOrder;
