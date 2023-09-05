"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useBlogs = () => {
  const queryClient = useQueryClient();

  const { data: blogs, refetch, isLoading: bLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/blogs`
      );
      return res.data;
    },
  });



  return { blogs, bLoading, refetch };
};

export default useBlogs;
