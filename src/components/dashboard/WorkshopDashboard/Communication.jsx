"use client";
import TitleDashboard from "@/components/Shared/TitleDashboard/TitleDashboard";
import useAuth from "@/hooks/useAuth";
import useWorkshopOrder from "@/hooks/useWorkshopOrders";
import MidSpinner from "@/components/Spinners/MidSpinner";
import CustomerCard from "./CustomerCard";
import CommunicateCard from "./CommunicateCard";

const Communication = () => {
  const { user } = useAuth();

  const { workshopOrders, wOLoading } = useWorkshopOrder();

  if (wOLoading) {
    return <MidSpinner />;
  }

  return (
    <div>
      <TitleDashboard title={"Communicate to our Client"} />
      <div>
        {workshopOrders &&
          workshopOrders.map((order) => (
            <CommunicateCard key={order._id} order={order} />
          ))}
      </div>
    </div>
  );
};

export default Communication;
