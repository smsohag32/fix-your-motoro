import useAuth from "@/hooks/useAuth";
import useWorkshopMechanic from "@/hooks/useWorkshopMechanic";
import Image from "next/image";
import React from "react";

const WorkshopOverview = () => {
  const user = useAuth();
  const email = "sohagsheik32@gmail.com";
  const overviewData = useWorkshopMechanic(email);
  console.log(overviewData);
  const dataArray = Object.entries(overviewData);

  return (
    <div>
      {Object.entries(dataArray).map((data, idx) => (
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
