import React, { useState } from "react";
import divisionDistricts from "./workshopData";

const WorkshopCategory = () => {
  const [searchDestrict, setSearchDisctrict] = useState("");

  const divisionData = Object.keys(divisionDistricts).filter((division) =>
    division.toLowerCase().includes(searchDestrict.toLowerCase())
  );

  return (
    <div className="md:px-5 mb-10">
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {divisionData.map((item, index) => (
          <div
            key={index}
            className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3 border
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
     
      `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopCategory;
