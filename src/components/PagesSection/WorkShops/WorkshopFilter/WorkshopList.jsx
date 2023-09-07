// components/WorkshopList.js
import React, { useState, useEffect } from "react";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
import MidSpinner from "@/components/Spinners/MidSpinner";

const WorkshopList = ({ location }) => {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/workshops?location=${location}`)
      .then((response) => response.json())
      .then((data) => {
        setWorkshops(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [location]);

  // Filter the workshops based on the selected location
  const filteredWorkshops = workshops.filter(
    (workshop) => workshop.address === location
  );

  return (
    <div>
      {isLoading ? (
        <MidSpinner />
      ) : (
        <ul>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorkshops.map((workshop) => (
              // <li key={workshop.id}>{workshop.name}</li>

              <SingleWorkshop
                key={workshop._id}
                workshopsData={workshop}
              ></SingleWorkshop>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default WorkshopList;
