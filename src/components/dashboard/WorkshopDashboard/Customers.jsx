"use client";
import TitleDashboard from "@/components/Shared/TitleDashboard/TitleDashboard";
import useAuth from "@/hooks/useAuth";
import useWorkshopOrder from "@/hooks/useWorkshopOrders";
import MidSpinner from "@/components/Spinners/MidSpinner";
import CustomerCard from "./CustomerCard";

const Customers = () => {
  const { workshopOrders, wOLoading } = useWorkshopOrder();

  if (wOLoading) {
    return <MidSpinner />;
  }

  return (
    <div>
      <TitleDashboard title={"Our Customers"} />
      {workshopOrders.length > 0 ? (
        <div>
          {workshopOrders.map((order) => (
            <CustomerCard key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div className="min-h-[40vh] flex justify-center items-center">
          <p className="text-2xl text-center font-bol primary-text px-4 py-2 bg-slate-100 border rounded-md">
            No Customers Founded
          </p>
        </div>
      )}
    </div>
  );
};

export default Customers;
