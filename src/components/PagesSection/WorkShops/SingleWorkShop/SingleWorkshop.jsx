import Image from "next/image";
import React, { useState } from "react";
import WorkshopDetails from "../WorkshopDetails/WorkshopDetails";

const SingleWorkshop = (props) => {
  
  const { name, _id, image,description } =props.workshopsData;
  // const { workshop } = props.workshopData;

  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  console.log(selectedWorkshop);
  const openModal = (workshopData) => {
    
    setSelectedWorkshop(workshopData);
  };

  const closeModal = () => {
    setSelectedWorkshop(null);
  };
  return (
    <div >
      <div className="flex items-center justify-center bg-gray-50">
        <div onClick={() => openModal(props.workshopsData)}>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-72 w-96"
            >
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={image}
                alt="zzxv"
                width={384}
                height={288}
              />
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 pb-12 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-serif text-3xl font-bold text-white">
                {name}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {description}
              </p>
            
            </div>
          </div>
        </div>
       
      </div>
      <WorkshopDetails
        isOpen={selectedWorkshop !== null}
        closeModal={closeModal}
        workshop={selectedWorkshop || {}}
      />
    </div>
  );
};

export default SingleWorkshop;
