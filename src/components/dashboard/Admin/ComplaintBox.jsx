"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/expert.modules.css";
import ComplaintBoxSingleCard from "./ComplaintBoxSingleCard";

const ComplaintBox = () => {
  const [complaint, setComplaint] = useState([]);

  useEffect(() => {
    fetch("/data/carServiceComplaints.json")
      .then((res) => res.json())
      .then((data) => setComplaint(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className=" default-container">
      {/* dashboard title section */}

      <div className="pt-8 card-section">
        {/*json map section*/}
        {complaint.map((singleCard, index) => (
          <ComplaintBoxSingleCard
            key={index}
            singleCard={singleCard}
          ></ComplaintBoxSingleCard>
        ))}
      </div>
    </div>
  );
};

export default ComplaintBox;
