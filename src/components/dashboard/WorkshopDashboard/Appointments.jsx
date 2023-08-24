"use client";
import TitleDashboard from "@/components/Shared/TitleDashboard/TitleDashboard";
import useAuth from "@/hooks/useAuth";
import useWorkshopOrder from "@/hooks/useWorkshopOrders";
import MidSpinner from "@/components/Spinners/MidSpinner";
import AppointCard from "./AppointmentCard";

const Appointments = () => {
  const { user } = useAuth();

  const { workshopOrders, wOLoading } = useWorkshopOrder(user?.email);

  if (wOLoading) {
    return <MidSpinner />;
  }

  return (
    <div>
      <TitleDashboard title={"Manage Appointments"} />
      <div>
        {workshopOrders &&
          workshopOrders.map((order) => (
            <AppointCard key={order._id} order={order} />
          ))}
      </div>
    </div>
  );
};

export default Appointments;
