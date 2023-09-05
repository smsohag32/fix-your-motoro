"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useWorkshops = () => {
  const queryClient = useQueryClient();

  const { data: workshops, isLoading: wLoading } = useQuery({
    queryKey: ["workshops"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/workshops`
      );
      return res.data;
    },
  });

  const refetchWorkshops = () => {
    // Manually trigger a refetch of the workshops query
    queryClient.invalidateQueries(["workshops"]);
  };

  return { workshops, wLoading, refetchWorkshops };
};

export default useWorkshops;
