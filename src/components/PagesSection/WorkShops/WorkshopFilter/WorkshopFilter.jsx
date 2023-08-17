"use client";
import React, { useState, useEffect } from "react";

const WorkshopFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredWorkshop, setFilteredWorkshop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = ["Maintenance", "Detailing", "Performance"];
  const apiBaseUrl = "/api/search";

  useEffect(() => {
    if (selectedOption) {
      setIsLoading(true);
      fetch(`${apiBaseUrl}?lacation=${selectedOption}`)
        .then((response) => response.json())
        .then((data) => {
          setFilteredWorkshop(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }
  }, [selectedOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm text-orange-600 font-semibold bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"
          onClick={toggleDropdown}
        >
          {selectedOption || "Select an option"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => selectOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Display the filtered services */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredWorkshop.map((workshop) => (
            <div key={workshop.id}>
              <p> {workshop.name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopFilter;
