import Steps from "@/components/PagesSection/Dasboard/UpComeAppt/Steps";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import Map from "@/components/map/Map";
import React from "react";
// dsd
const OrderContent = ({ order }) => {
  const lat = parseFloat(order?.lat);
  const lon = parseFloat(order?.lon);
  const hasValidPosition = !Number.isNaN(lat) && !Number.isNaN(lon);
  const postion = [lat, lon];
  return (
    <div className="bg-white border border-gary-400">
      <div className="w-full">
        {hasValidPosition ? (
          <Map title={"Workshop"} position={postion} />
        ) : (
          <EmptyState
            message={"Workshop map not share"}
            address={"https://www.google.com/maps"}
            label={"Visit Map"}
          />
        )}
      </div>
      <div className="w-full">
        <Steps order={order} />
      </div>
    </div>
  );
};

export default OrderContent;
