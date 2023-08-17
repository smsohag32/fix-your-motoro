"use client";
import ServiceFilter from "@/components/PagesSection/Services/ServiceFilter";
import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/services");
      const data = await response.json();
      setServicesData(data);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="my-8 text-right">
        <ServiceFilter></ServiceFilter>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <SingleService
            key={service.service_id}
            service={service}
          ></SingleService>
        ))}
      </div>
    </>
  );
};

export default Services;
