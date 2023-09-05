import { useState } from "react";
import divisionDistricts from "./workshopData";

const WorkshopCategory = ({ setDistrictText }) => {
  const [district, setDistrict] = useState("");

  const divisionData = Object.keys(divisionDistricts);

  console.log(district);

  return (
    <div className="md:px-5 mb-10">
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {divisionData.map((item, index) => (
          <div
            onClick={() => setDistrict(item)}
            key={index}
            className={`
        flex 
        flex-col 
        districtItems
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

      {district.length > 0 && (
        <div>
          <div className="pt-4 flex flex-row items-center gap-5 overflow-x-auto">
            {district &&
              divisionDistricts[district].map((item, index) => (
                <div
                  onClick={() => setDistrictText(item)}
                  key={index}
                  className={`
        py-2 px-3 border
        border-b-2
        hover:text-neutral-800
        transition
        block
        cursor-pointer
     
      `}
                >
                  {item}
                </div>
              ))}
          </div>

          <div className="text-end mt-2">
            <button
              onClick={() => setDistrictText("")}
              className="border border-gray-700 p-2"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopCategory;
