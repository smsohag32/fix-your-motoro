"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useBlogs = () => {
  const queryClient = useQueryClient();

  const { data: blogs, isLoading: bLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/blogs`
      );
      return res.data;
    },
  });

  const refetchBlogs = () => {
    // Manually trigger a refetch of the blogs query
    queryClient.invalidateQueries(["blogs"]);
  };

  return { blogs, bLoading, refetchBlogs };
};

export default useBlogs;
