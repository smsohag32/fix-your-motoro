import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import Steps from "@/components/PagesSection/Dashboard/UpComeAppt/Steps";

const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });

const OrderContent = ({ order }) => {
  const [hasValidPosition, setHasValidPosition] = useState(false);
  const [position, setPosition] = useState([0, 0]); // Default position

  useEffect(() => {
    const lat = parseFloat(order?.lat);
    const lon = parseFloat(order?.lon);

    if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
      setPosition([lat, lon]);
      setHasValidPosition(true);
    }
  }, [order]);

  return (
    <div className="bg-white border border-gray-400">
      <div className="w-full">
        {hasValidPosition ? (
          <Map position={position} title="Workshop Location" />
        ) : (
          <EmptyState
            message={"Workshop map not shared"}
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
