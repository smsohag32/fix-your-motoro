"use client";
import React, { useEffect, useState } from "react";
import WorkshopFilter from "../WorkshopFilter/WorkshopFilter";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
import Spinner from "@/components/Spinners/Spinner";

const WorkShops = () => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const [filteredWorkshopsData, setFilteredWorkshopsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fya-backend.vercel.app/api/v1/auth/workshops"
        );
        const data = await response.json();
        setWorkshopsData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter the workshopsData array by status "confirm"
  useEffect(() => {
    const filteredData = workshopsData.filter(
      (workshop) => workshop.status === "confirm"
    );
    setFilteredWorkshopsData(filteredData);
  }, [workshopsData]);

  return (
    <>
      <div className="my-8 text-right">
        {/* <WorkshopFilter></WorkshopFilter> */}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorkshopsData.map((workshop) => (
            <SingleWorkshop
              key={workshop.workshop_id}
              workshopsData={workshop}
            ></SingleWorkshop>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkShops;
