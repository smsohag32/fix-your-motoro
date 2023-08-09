"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import OurExpertSingleCart from "./OurExpertSingleCart";
import "@/styles/expert.modules.css";

const ExpertSection = () => {
  const [ourExpert, setOurExpert] = useState([]);

  {
    /*json data fetch section */
  }
  useEffect(() => {
    fetch("/data/expert.json")
      .then((res) => res.json())
      .then((data) => setOurExpert(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  {
    /*slice section*/
  }
  const expertLimit = 6;
  return (
    <div>
      <div className="">
        <h1 className="my-5 text-5xl font-bold text-center">Our Expert</h1>
        <div className="card-section">
          {ourExpert.slice(0, expertLimit).map((singleCard, index) => (
            <OurExpertSingleCart
              key={index}
              singleCard={singleCard}
            ></OurExpertSingleCart>
          ))}
        </div>
        {/* see all btn Connect expert section */}
        <p className='primary-btn-position-center'><Link href="/expert" className='primary-btn'>See All</Link></p>
      </div>
    </div>
  );
};

export default ExpertSection;
