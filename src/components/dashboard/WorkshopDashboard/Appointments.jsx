"use client";
import TitleDashboard from "@/components/Shared/TitleDashboard/TitleDashboard";
import useAuth from "@/hooks/useAuth";
import useWorkshopOrder from "@/hooks/useWorkshopOrders";
import MidSpinner from "@/components/Spinners/MidSpinner";
import AppointCard from "./AppointmentCard";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";

const Appointments = () => {
  const { user } = useAuth();
  const email = "sohagsheik32@gmail.com";

  const { workshopOrders, wOLoading, refetch } = useWorkshopOrder(email);

  if (wOLoading) {
    return <MidSpinner />;
  }

  return (
    <div className="mt-40">
      <TitleDashboard title={"Manage Appointments"} />
      <div className="my-10">
        {workshopOrders?.length > 0 ? (
          workshopOrders.map((order) => (
            <AppointCard key={order._id} order={order} refetch={refetch} />
          ))
        ) : (
          <EmptyState
            label={"Post a Service"}
            address={"/dashboard/workshop/service_form"}
            message={"Appointment request not found"}
          ></EmptyState>
        )}
      </div>
    </div>
  );
};

export default Appointments;
