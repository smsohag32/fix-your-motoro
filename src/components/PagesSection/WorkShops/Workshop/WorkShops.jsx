"use client";
import React, { useContext, useEffect, useState } from "react";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
import SearchContext from "@/context/SearchContext";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import axios from "axios";
import MidSpinner from "@/components/Spinners/MidSpinner";
import WorkshopCategory from "./WorkshopCategory";
import PaginationContent from "./PaginationContent";
import { workshopLoad } from "@/utils/workshopLoad";

const WorkShops = () => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSearchText, searchText } = useContext(SearchContext);
  const [districtText, setDistrictText] = useState("");
  const [limit, setLimit] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        workshopLoad(searchText, currentPage, limit).then((data) => {
          setLoading(false);
          console.log(data);
          setWorkshopsData(data);
          setDistrictText("");
        });
      } catch (error) {
        setLoading(false);
        console.error("Error fetching JSON data:", error);
      } finally {
      }
    };
    fetchData();
  }, [searchText, currentPage, limit]);

  useEffect(() => {
    if (districtText?.length > 0) {
      setSearchText(districtText);
      if (districtText === searchText) {
        setDistrictText("");
      }
    }
  }, [districtText, searchText, setSearchText]);

  const pageNumbers = [...Array(workshopsData?.totalPages).keys()].length;

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className="min-h-screen">
      <div>
        <WorkshopCategory
          setSearchText={setSearchText}
          setDistrictText={setDistrictText}
          districtText={districtText}
        />
      </div>
      {loading ? (
        <MidSpinner />
      ) : (
        <div className="my-8">
          {workshopsData?.result?.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {workshopsData?.result.map((workshop) => (
                <SingleWorkshop
                  key={workshop._id}
                  workshopsData={workshop}
                ></SingleWorkshop>
              ))}
            </div>
          ) : (
            <EmptyState
              label={"search again"}
              address="/workshop"
              message={`No workshop available ${searchText}`}
            ></EmptyState>
          )}
        </div>
      )}

      <div className="text-center my-8">
        <PaginationContent
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={pageNumbers}
        />
      </div>
    </div>
  );
};

export default WorkShops;
