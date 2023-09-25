"use client";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MidSpinner from "@/components/Spinners/MidSpinner";
import OurServiceSingleCart from "./OurServiceSingleCart";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";


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
    AOS.init({ offset: 300, duration: 700 });
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
  const expertLimit = 3;
  return (
    <>
      <div className="py-12 mt-12 default-container">
        <SectionTitle
          title="Special Services"
          subTitle="We are provide motor servicing"
        />
        {loading ? (
          <MidSpinner />
        ) : (
          <div data-aos="fade-right" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.slice(0, expertLimit).map((service) => (
              <OurServiceSingleCart
                key={service._id}
                service={service}
              ></OurServiceSingleCart>
            ))}
          </div>
        )}

      </div>
    </>
  );
};

export default Services;
