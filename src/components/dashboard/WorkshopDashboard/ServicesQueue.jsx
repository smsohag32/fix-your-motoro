"use client";
import React, { useEffect, useState } from "react";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Link from "next/link";
import loadServices from "@/utils/data/fetchData/loadServices";
import useWorkshopOrder from "@/hooks/useWorkshopOrders";

const ServicesQueue = () => {
  const [loading, setLoading] = useState(false);

  const email = "sohagsheik32@gmail.com";
  const { workshopOrders, wOLoading } = useWorkshopOrder(email);

  if (loading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopOrders ? (
              workshopOrders?.map((order) => (
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
              ))
            ) : (
              <div className="min-h-screen flex justify-center items-center">
                <p className="text-2xl text-center font-bol primary-text">
                  NO Services Available yet
                </p>
              </div>
            )}
          </div>
          <div className="min-h-[20vh] border md:flex justify-center items-center">
            <Link href="/dashboard/workshop/service_form">
              <button className="rounded-lg primary-btn">
                Post a new Service
              </button>{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default ServicesQueue;
