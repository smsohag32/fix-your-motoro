"use client";
import workshopServices from "@/utils/data/fetchData/workshopServices";
import React, { useEffect, useState } from "react";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Link from "next/link";
import loadServices from "@/utils/data/fetchData/loadServices";

const ServicesQueue = () => {
  const [orders, setOrders] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const email = "tr.tonmoy0110.trt@gmail.com";

    const fetchData = async () => {
      setLoading(true);
      const data = await workshopServices(email);
      if (data) {
        setOrders(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await loadServices();
      if (data) {
        setServicesData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // const orderId = orders?.map((order) => order.service_id);
  // const serviceId = servicesData?.map((service) => service._id);

  // const service = orderId === serviceId;

  // const { service_name } = service;

  if (loading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20  ">
          <div>
            {orders ? (
              orders?.map((order) => (
                <div key={order._id}>
                  <div className="bg-white rounded shadow-md">
                    <div className="duration-500 transform gap-8 border-2 w-full flex h-40 items-center">
                      <div className="h-full w-1/2 flex justify-center items-center">
                        <p className="items-center">
                          Name :
                          <span className="text-slate-500">
                            {order.firstName} {order.lastName}
                          </span>
                        </p>
                      </div>
                      <div className="w-full space-y-3 mb-5">
                        <p className="">
                          Email :
                          <span className="text-slate-500">{order.email}</span>
                        </p>
                        <p className="">
                          Vehicle :
                          <span className="text-slate-500">
                            {order.vehicle}
                          </span>
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center ">
                        <p className="">
                          Booking Date :
                          <span className="text-slate-500">
                            {order.bookingDate}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p> NO Services Available yet </p>
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
