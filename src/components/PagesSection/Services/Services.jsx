"use client";
import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/services.json");
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
