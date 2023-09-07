"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
  const {
    data: users,
    isLoading: uLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/users`
      );
      return res.data;
    },
  });

  return { users, uLoading, refetch };
};

export default useAllUsers;
