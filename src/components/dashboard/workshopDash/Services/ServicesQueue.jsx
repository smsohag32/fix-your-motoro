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
  console.log(servicesData);
  const serviceId = servicesData?.filter((service) => service._id);

  const service = orderId === serviceId;

  const { service_name } = service;

  if (loading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20 ">
          <div className="md:flex justify-around items-center mb-5">
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
                    <div className="md:flex justify-around items-center mb-2">
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
              <h2>No service is available yet</h2>
            )}
          </div>
          <div className="min-h-[40vh] border md:flex justify-center items-end">
            <Link href="/">
              <button className="primary-btn">Post a new Service</button>{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default ServicesQueue;
