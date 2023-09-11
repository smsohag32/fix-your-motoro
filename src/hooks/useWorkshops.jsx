<<<<<<< HEAD
=======
"use client";
>>>>>>> 23bfcb1db3d6688ab0fdedc2c6f97a823e9e3c33
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWorkshops = () => {
<<<<<<< HEAD

  const { data: workshops, refetch, isLoading: wLoading } = useQuery({
=======
  const {
    data: workshops,
    isLoading: wLoading,
    refetch,
  } = useQuery({
>>>>>>> 23bfcb1db3d6688ab0fdedc2c6f97a823e9e3c33
    queryKey: ["workshops"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/workshops`
      );
      return res.data;
    },
  });
<<<<<<< HEAD
=======

>>>>>>> 23bfcb1db3d6688ab0fdedc2c6f97a823e9e3c33
  return { workshops, wLoading, refetch };
};

export default useWorkshops;