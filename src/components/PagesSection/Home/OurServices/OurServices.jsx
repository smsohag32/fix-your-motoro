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
    <div className="py-12 mt-20 default-container">
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
      <button className=" w-[100px] mx-auto text-center">
        <Link className="text-center rou primary-btn" href="service">see all</Link>
      </button>
    </div>
  );
};

export default Services;
