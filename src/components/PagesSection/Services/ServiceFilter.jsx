"use client";
import React, { useState, useEffect } from "react";

const ServiceFilter = ({ selectOption, selectedOption, setIsOpen, isOpen }) => {
  // const [isLoading, setIsLoading] = useState(false);

  const options = ["Maintenance", "Detailing", "Performance"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10 inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm primary-text font-semibold bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#69d94f]"
          onClick={toggleDropdown}
        >
          {selectedOption || "Select an option"}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
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
        <div className="absolute right-0 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredServices.map((service) => (
            <div key={service.id}>
              <p> {service.service_name} </p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default ServiceFilter;
