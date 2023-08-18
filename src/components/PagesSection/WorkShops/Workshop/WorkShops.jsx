"use client";
import React, { useEffect, useState } from "react";
import WorkshopFilter from "../WorkshopFilter/WorkshopFilter";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import CardSlider from "@/components/CardsSlider/CardsSlider";
import Spinner from "@/components/Spinners/Spinner";

const WorkShops = () => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pLoading, setPLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/workshops");
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
  useEffect(() => {
    setPLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/all/products");
        const data = await response.json();
        setProducts(data);
        setPLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setPLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="my-8 text-right">
        <WorkshopFilter></WorkshopFilter>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workshopsData.map((workshop) => (
            <SingleWorkshop
              key={workshop.workshop_id}
              workshopsData={workshop}
            ></SingleWorkshop>
          ))}
        </div>
      )}
      <div className="mt-8 pb-8">
        <SectionTitle
          title="Products Zone"
          subTitle="Order now our best products"
        />
        <div>
          <CardSlider items={products} loading={pLoading} />
        </div>
      </div>
    </>
  );
};

export default WorkShops;
