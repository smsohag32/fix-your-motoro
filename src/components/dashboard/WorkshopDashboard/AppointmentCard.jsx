"use client";
import { Toaster, toast } from "react-hot-toast";

const AppointCard = (props) => {
  const { service_id, service_category, bookingDate, vehicle, phone } =
    props.order;
  return (
    <div className="bg-white rounded shadow-md">
      <div className="duration-500 transform gap-8 border-2 w-full flex h-40 items-center">
        <div className="h-full w-1/2 flex justify-center items-center">
          <p className="items-center">
            Vehicle : <span className="text-slate-500">{vehicle}</span>
          </p>
        </div>
        <div className="w-full space-y-3 mb-5">
          <h1 className="text-lg font-semibold opacity-60">
            Contact : <span className="text-slate-500">{phone}</span>
          </h1>
          <p className="">
            Service ID : <span className="text-slate-500">{service_id}</span>
          </p>
          <p className="">
            Service Category :
            <span className="text-slate-500">{service_category}</span>
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
            Approve
          </button>
          <button
            onClick={() => toast.error("This service will be taken later")}
            className="px-3 py-2 text-center transition-all duration-500 font-semibold bg-teal-500 text-white hover:bg-teal-600"
          >
            Postpone
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AppointCard;
