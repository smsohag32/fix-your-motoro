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

  const orderId = orders?.filter((order) => order._id);
  console.log(servicesData);
  const serviceId = servicesData?.filter((service) => service._id);

  if (loading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20  ">
          <div>
            {orders ? (
              orders?.map((order) => <div key={order._id}></div>)
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
