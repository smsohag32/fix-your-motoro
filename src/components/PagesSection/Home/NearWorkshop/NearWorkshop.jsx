"use client";
import CardSlider from "@/components/CardsSlider/CardsSlider";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React, { useEffect, useState } from "react";

const NearWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/workshops");
        const data = await response.json();
        setWorkshops(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-[60vh]">
      <div className="default-container mb-10 ">
        <SectionTitle
          title="Servicing Workshops"
          subTitle="Trust in our experienced technicians to provide top-notch maintenance and repairs for your vehicles"
        />
        <CardSlider workshops={workshops} loading={loading} />
      </div>
    </div>
  );
};

export default NearWorkshops;