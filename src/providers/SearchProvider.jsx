"use client";
import SearchContext from "@/context/SearchContext";
import React, { useState } from "react";

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        loading,
        setLoading,
        searchData,
        setSearchData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
