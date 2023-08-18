
"use client";
import React, { useEffect, useState } from "react";
import WorkshopFilter from "../WorkshopFilter/WorkshopFilter";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";

const WorkShops = () => {
  const [workshopsData, setWorkshopsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/workshops");
      const data = await response.json();
      setWorkshopsData(data);
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
        <WorkshopFilter></WorkshopFilter>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workshopsData.map((workshop) => (
          <SingleWorkshop
            key={workshop.workshop_id}
            workshopsData={workshop}
          ></SingleWorkshop>
        ))}
      </div>
    </>
  );
};

export default WorkShops;
