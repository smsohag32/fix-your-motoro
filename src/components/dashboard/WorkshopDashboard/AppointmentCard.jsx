"use client";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import { Toaster, toast } from "react-hot-toast";
import ApprovedModal from "./ApprovedModal";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });
const AppointCard = ({ order, refetch }) => {
  const {
    _id,
    service_id,
    firstName,
    service_category,
    bookingDate,
    streetAddress,
    vehicle,
    phone,
    status,
    service_type,
  } = order || {};
  const [isOpen, setIsOpen] = useState(false);
  const [hasValidPosition, setHasValidPosition] = useState(false);
  const [position, setPosition] = useState([0, 0]); // Default position

  useEffect(() => {
    const lat = parseFloat(order?.user_lat);
    const lon = parseFloat(order?.user_lon);

    if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
      setPosition([lat, lon]);
      setHasValidPosition(true);
    }
  }, [order]);
  return (
    <div className="bg-white rounded border border-green-300">
      <div className="duration-500 transform gap-8 p-5 border-2 w-full flex-col md:flex-row flex h-full  md:h-60 items-center">
        <div className="h-full w-full flex flex-col justify-center  space-y-3 mb-5">
          <p className="items-center">
            Vehicle : <span className="text-slate-500"> {vehicle}</span>
          </p>
          <p className="items-center">
            Name : <span className="text-slate-500"> {firstName}</span>
          </p>
          <p className="items-center">
            Location : <span className="text-slate-500"> {streetAddress}</span>
          </p>
        </div>
        <div className="w-full space-y-3 mb-5">
          <h1 className="text-lg font-semibold opacity-60">
            Contact : <span className="text-slate-500"> {phone}</span>
          </h1>
          <p className="">
            Service ID : <span className="text-slate-500"> {service_id}</span>
          </p>
          <p className="">
            Service Category :
            <span className="text-slate-500"> {service_category}</span>
          </p>
          <p className="">
            Service Type :
            <span className="text-blue-600">
              {" "}
              {service_type || "On gradge"}
            </span>
          </p>
          <p className="">
            Booking Date : <span className="text-slate-500">{bookingDate}</span>
          </p>
        </div>
        <div className="w-full flex justify-center items-center ">
          {status === "approved" ? (
            ""
          ) : (
            <button
              onClick={() =>
                toast.success("This order has been approved successfully")
              }
              className="primary-btn mr-3"
            >
              Postpone
            </button>
          )}
          <button
            disabled={status === "approved"}
            onClick={() => setIsOpen(true)}
            className="px-3 py-2 text-center transition-all duration-500 font-semibold bg-teal-500 text-white rounded-md hover:bg-teal-600"
          >
            {status === "approved" ? "Approved done" : "Approve"}
          </button>
        </div>
      </div>
      <div className="">
        {hasValidPosition ? (
          <Map title={streetAddress} position={position} />
        ) : (
          <EmptyState
            message={"Customer not to share his location"}
            address={"https://www.google.com/maps"}
            label={"Find to google map"}
          />
        )}
      </div>
      <Toaster />
      <ApprovedModal
        refetch={refetch}
        id={_id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AppointCard;
