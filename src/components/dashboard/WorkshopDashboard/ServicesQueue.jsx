"use client";
import workshopServices from "@/utils/data/fetchData/workshopServices";
import React, { useEffect, useState } from "react";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Link from "next/link";

const ServicesQueue = () => {
  const [orders, setOrders] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const email = "tr.tonmoy0110.trt@gmail.com";

    const fetchData = async () => {
      const data = await workshopServices(email);
      if (data) {
        setOrders(data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/services`
        );
        const data = await response.json();
        setServicesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const orderId = orders?.filter((order) => order._id);
  const serviceId = servicesData?.filter((service) => service._id);

  const service = orderId === serviceId;

  const { service_name } = service;

  if (loading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20  ">
          <div className="items-center justify-around mb-5 md:flex bg-amber-100 py-2">
            <h2 className="text-xl font-semibold text-slate-800"> Name : </h2>
            <p className="text-xl font-semibold text-slate-800"> Category </p>
            <p className="text-xl font-semibold text-slate-800"> Vehicle </p>
            <p className="text-xl font-semibold text-slate-800">Booking Date</p>
          </div>
          <div>
            {orders ? (
              orders?.map((item, idx) => (
                <div key={idx}>
                  <div>
                    <div className="items-center justify-around md:flex px-2 rounded-md border-b-2 border-solid  border-orange-500 py-3 mb-5 ">
                      <h2 className="text-lg font-medium text-slate-600">
                        {service_name}
                      </h2>
                      <p className="text-lg font-medium text-slate-600">
                        {item.service_category}
                      </p>
                      <p className="text-lg font-medium text-slate-600">
                        {item.vehicle}
                      </p>
                      <p className="text-lg font-medium text-slate-600">
                        {item.bookingDate}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="min-h-screen md:flex justify-center items-center">
                <h2 className="text-4xl primary-text tracking-wider font-extrabold px-4 py-2 bg-gray-200 rounded-md">
                  No service is available yet
                </h2>
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
