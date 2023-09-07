"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWorkshops = () => {
  const {
    data: workshops,
    isLoading: wLoading,
    refetch,
  } = useQuery({
    queryKey: ["workshops"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/workshops`
      );
      return res.data;
    },
  });

  return { workshops, wLoading, refetch };
};

export default useWorkshops;
