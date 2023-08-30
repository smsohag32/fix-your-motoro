"use client";
import UserModal from "@/components/Modal/Modal";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import Map from "@/components/map/Map";
import { Toaster, toast } from "react-hot-toast";
import ApprovedModal from "./ApprovedModal";
import { useState } from "react";

const AppointCard = (props) => {
  const {_id, service_id, firstName, user_lat, user_lon, service_category, bookingDate,streetAddress, vehicle, phone, service_type } =
    props.order || {};
    const lat = parseFloat(user_lat);
    const lon = parseFloat(user_lon);
    const postion = [lat, lon]
    const hasValidPosition = !Number.isNaN(lat) && !Number.isNaN(lon);
    const [isOpen, setIsOpen] = useState(false);


    const handleAproved = () =>{

    }

    const handlePostpon = () => {

    }
    return (
    <div className="bg-white rounded shadow-md">
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
            <span className="text-blue-600"> {service_type || 'On gradge'}</span>
          </p>
          <p className="">
            Booking Date : <span className="text-slate-500">{bookingDate}</span>
          </p>
        </div>
        <div className="w-full flex justify-center items-center ">
          <button
            onClick={() =>
              toast.success("This order has been approved successfully")
            }
            className="primary-btn mr-3"
          >
            Postpone
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="px-3 py-2 text-center transition-all duration-500 font-semibold bg-teal-500 text-white hover:bg-teal-600"
          >
             Approve
          </button>
        </div>
      </div>
      <div className="p-5">
       {
        hasValidPosition ?  <Map title={streetAddress} position={postion}/> : <EmptyState message={'Customer not to share his location'} address={'https://www.google.com/maps'} label={'Visit Map'}/>
       }
      </div>
      <Toaster />
       <ApprovedModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AppointCard;
