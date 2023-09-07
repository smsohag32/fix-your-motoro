"use client";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Link from "next/link";
import useWorkshopServices from "@/hooks/useWorkshopServices";

const ServicesQueue = () => {
  const { workshopServices, wOLoading } = useWorkshopServices();
  console.log(workshopServices);

  if (wOLoading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20  ">
          <div className="py-10 border md:flex justify-center items-center">
            <Link href="/dashboard/workshop/service_form">
              <button className="rounded-lg primary-btn">
                Post a new Service
              </button>{" "}
            </Link>
          </div>

          {workshopServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workshopServices?.map((order) => (
                <div
                  className="p-5 border-2 border-red-500 bg-slate-100 m-1 space-y-5 "
                  key={order._id}
                >
                  <h4 className="font-semibold text-lg mb-3">
                    Customer Name : {order.firstName} {order.lastName}
                  </h4>
                  <p className="text-md font-medium text-slate-600">
                    Email : {order.email}
                  </p>
                  <p className="text-md font-medium text-slate-600 mb-1">
                    Contact No : {order.phone}
                  </p>
                  <p className="text-md font-medium mb-1 text-slate-600">
                    Address : {order.streetAddress}
                  </p>
                  <p className="text-md font-medium primary-text text-slate-600">
                    Vehicle: {order.vehicle}
                  </p>
                  <p className="text-md font-medium primary-text text-slate-600">
                    Service Category : {order.service_category}
                  </p>
                  <p className="text-md font-medium text-slate-600">
                    Booking Date : {order.bookingDate}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[40vh] flex justify-center items-center">
              <p className="text-2xl text-center font-bol primary-text px-4 py-2 bg-slate-100 border rounded-md">
                NO Services Available yet
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default ServicesQueue;
