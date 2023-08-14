"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/expert.modules.css";
import OurServiceSingleCart from "./OurServiceSingleCart";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/data/service.json")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const expertLimit = 6;
  return (
    <div className="default-container py-12  mt-20">
      <SectionTitle
        title="Special Services"
        subTitle="We are provide motor servicing"
      />
      <div className="card-section pt-8">
        {/*json map section*/}
        {service.slice(0, expertLimit).map((singleCard, index) => (
          <OurServiceSingleCart
            key={index}
            singleCard={singleCard}
          ></OurServiceSingleCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
