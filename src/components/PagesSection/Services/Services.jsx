"use client";
import ServiceFilter from "@/components/PagesSection/Services/ServiceFilter";
import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";
import MidSpinner from "@/components/Spinners/MidSpinner";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
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
  }, [selectedOption]);

  return (
    <>
      <div className="my-8 text-right">
        <ServiceFilter
          selectOption={selectOption}
          selectedOption={selectedOption}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></ServiceFilter>
      </div>
      {loading ? (
        <MidSpinner />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <SingleService
              key={service.service_id}
              service={service}
            ></SingleService>
          ))}
        </div>
      )}

      <div></div>
    </>
  );
};

export default Services;
