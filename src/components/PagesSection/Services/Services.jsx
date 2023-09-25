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
  const numberOfServicesToExclude = 5;
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
          {servicesData.slice(0, servicesData.length - numberOfServicesToExclude).map((service) => (
            <SingleService
              key={service._id}
              service={service}
              loading={loading}
            ></SingleService>
          ))}
        </div>
      )}
    </>
  );
};

export default Services;
