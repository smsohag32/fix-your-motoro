import useAuth from "@/hooks/useAuth";
import useWorkshopMechanic from "@/hooks/useWorkshopMechanic";
import Image from "next/image";
import React from "react";

const WorkshopOverview = () => {
  const user = useAuth();
  const { overviewData } = useWorkshopMechanic(user?.email);

  return (
    <div>
      {Object.entries(overviewData).map((data, idx) => (
        <div key={idx}>
          <div>
            <p> {data.totalWorkOrder} </p>
            <p> {data.completeOrder} </p>
            <p> {data.pendingOrder} </p>
            <p> {data.totalPostponOrder} </p>
            <p> {data.approvedOrder} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopOverview;
