"use client";
import Map from "@/components/map/Map";
import { Toaster, toast } from "react-hot-toast";

const AppointCard = (props) => {
  const { service_id, firstName, service_category, bookingDate,streetAddress, vehicle, phone, service_type } =
    props.order || {};
    console.log(props.order);
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
            onClick={() => toast.error("This service will be taken later")}
            className="px-3 py-2 text-center transition-all duration-500 font-semibold bg-teal-500 text-white hover:bg-teal-600"
          >
             Approve
          </button>
        </div>
      </div>
      <div className="p-5">
        <Map title={streetAddress}/>
      </div>
      <Toaster />
    </div>
  );
};

export default AppointCard;
