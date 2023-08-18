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
    <div className="py-12 mt-12 default-container">
      <SectionTitle
        title="Special Services"
        subTitle="We are provide motor servicing"
      />
      <div className="pt-8 card-section">
        {/*json map section*/}
        {service.slice(0, expertLimit).map((singleCard, index) => (
          <OurServiceSingleCart
            key={index}
            singleCard={singleCard}
          ></OurServiceSingleCart>
        ))}
      </div>
      <div className="text-center w-full">
        <Link className="text-center primary-btn" href="service">
          See all
        </Link>
      </div>
    </div>
  );
};

export default Services;
