"use client";
import { Toaster, toast } from "react-hot-toast";

const CustomerCard = (props) => {
  const { firstName, lastName, email, bookingDate, vehicle, phone } =
    props.order;
  return (
    <div className="bg-white rounded shadow-md">
      <div className="flex items-center w-full gap-8 duration-500 transform border-2 p-4">
        <div className="flex items-center justify-center w-1/2 h-full">
          <p className="items-center">
            Name :
            <span className="text-slate-500">
              {firstName} {lastName}
            </span>
          </p>
        </div>
        <div className="w-full mb-5 space-y-3">
          <h1 className="text-lg font-semibold opacity-60">
            Contact : <span className="text-slate-500">{phone}</span>
          </h1>
          <p className="">
            Email : <span className="text-slate-500">{email}</span>
          </p>
          <p className="">
            Vehicle :<span className="text-slate-500">{vehicle}</span>
          </p>
          <p className="">
            Booking Date : <span className="text-slate-500">{bookingDate}</span>
          </p>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button
            onClick={() =>
              toast.success("Functionality will be complete soon..")
            }
            className="primary-btn"
          >
            Service List
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CustomerCard;
