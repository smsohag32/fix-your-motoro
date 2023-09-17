import { useState } from "react";
import divisionDistricts from "./workshopData";

const WorkshopCategory = ({ setDistrictText, setSearchText, districtText }) => {
  const [district, setDistrict] = useState("");
  const [dis, setDis] = useState("");
  const divisionData = Object.keys(divisionDistricts);

  const handleAll = () => {
    setSearchText("");
    setDis("");
    setDistrict("");
  };
  return (
    <div className="md:px-5 mb-10">
      <button
        onClick={() => handleAll()}
        className="border border-green-300 text-sm p-3"
      >
        All workshop
      </button>
      <p className="text-lg font-semibold mt-3">Search by division</p>
      <div className="pt-2 flex flex-row items-center justify-between overflow-x-auto">
        {divisionData.map((item, index) => (
          <div
            onClick={() => setDistrict(item)}
            key={index}
            className={`
        flex 
        flex-col 
        districtItems
        hover:text-green-500
        items-center 
        justify-center 
        gap-2
        p-3 border
        border-b-2
        transition
        ${item === district ? "primary-text" : ""}
        cursor-pointer
     
      `}
          >
            {item}
          </div>
        ))}
      </div>

      {district.length > 0 && (
        <div className="mt-5">
          <p className="text-lg font-semibold mt-3">Select your district</p>
          <div className=" flex mt-2 flex-row items-center gap-5 overflow-x-auto">
            {district &&
              divisionDistricts[district].map((item, index) => (
                <div
                  onClick={() => {
                    setDistrictText(item), setDis(item);
                  }}
                  key={index}
                  className={`
        py-2 px-3 border
        border-b-2
        hover:text-green-500
        transition
        block
        cursor-pointer
        ${item === dis ? "primary-text" : ""}
     
      `}
                >
                  {item}
                </div>
              ))}
          </div>
          <div className="text-end mt-4">
            <button
              onClick={() => setDistrict("")}
              className="border border-gray-300 text-sm px-2 py-1"
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
