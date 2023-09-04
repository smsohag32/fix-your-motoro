"use client";
import React, { useContext, useEffect, useState } from "react";
import WorkshopFilter from "../WorkshopFilter/WorkshopFilter";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
import Spinner from "@/components/Spinners/Spinner";
import SearchContext from "@/context/SearchContext";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import axios from "axios";
import MidSpinner from "@/components/Spinners/MidSpinner";
import WorkshopCategory from "./WorkshopCategory";

const WorkShops = () => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const [filteredWorkshopsData, setFilteredWorkshopsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchData, text, searchText } = useContext(SearchContext);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios(
          `https://fya-backend.vercel.app/api/v1/auth/workshops/search/division?location=${searchText}`
        );
        setWorkshopsData(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching JSON data:", error);
      } finally {
      }
    };
    fetchData();
  }, [searchText]);

  return (
    <>
      <div>
        <WorkshopCategory />
      </div>
      {loading ? (
        <MidSpinner />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {workshopsData.length > 0 ? (
            workshopsData.map((workshop) => (
              <SingleWorkshop
                key={workshop._id}
                workshopsData={workshop}
              ></SingleWorkshop>
            ))
          ) : (
            <EmptyState
              label={""}
              address="/workshops"
              message={"No workshop available"}
            ></EmptyState>
          )}
        </div>
      )}
    </>
  );
};

export default WorkShops;
