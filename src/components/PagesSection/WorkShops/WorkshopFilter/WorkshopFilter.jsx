// pages/search.js
import React, { useState } from "react";
import WorkshopList from "./WorkshopList";

const WorkshopFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div >
      
      <div className="justify-center">
      <h1>Search Workshops</h1>
        <label htmlFor="location">Select Location:</label>
        <select id="location" value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select</option>
          <option value="Khulna">Khulna</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Barishal">Barishal</option>
          <option value="Dhaka">Dhaka</option>
          {/* Add more location options */}
        </select>
      </div>
      <WorkshopList location={selectedLocation} />
    </div>
  );
};

export default WorkshopFilter;
