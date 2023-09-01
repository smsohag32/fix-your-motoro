"use client";

import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OrderContent from "./OrderContent";

const UpcomeAppointment = () => {
  const { user, loading } = useAuth();
  const { data: workOrder, isLoading: wLoading } = useQuery({
    queryKey: ["workorder"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/user-order/${user?.email}`
      );
      return res.data;
    },
  });

  if (loading || wLoading) {
    return <MidSpinner />;
  }

  return (
    <div>
      <div className="my-5">
        <h1 className="md:text-2xl text-xl font-semibold opacity-75">
          Up Comming Appointment
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {workOrder?.length > 0 ? (
          workOrder.map((order) => (
            <OrderContent key={order?._id} order={order} />
          ))
        ) : (
          <EmptyState
            label={"Book a Appointment"}
            message={"Upcomming appointment not found"}
            address={"/services"}
          />
        )}
      </div>
    </div>
  );
};

export default UpcomeAppointment;
