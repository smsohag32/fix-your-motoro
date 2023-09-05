import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCartProducts = () => {
  const { user, loading } = useAuth();
  const {
    data: cartProducts,
    isLoading: cartLoading,
    refetch,
  } = useQuery({
    queryKey: ["cartProducts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/carts/user/${user?.email}`
      );
      return res.data;
    },
  });
  return { cartProducts, cartLoading, refetch };
};

export default useCartProducts;
