import Image from "next/image";
import React from "react";

const MechanicCard = ({ mechanic }) => {
  const { name, img, specialty, experience, about } = mechanic;
  return (
    <div>
      <div className=" bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <div className="w-full h-full">
          <Image
            src={img}
            alt={name}
            height={350}
            width={350}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold"> {name} </h2>
          <p className="text-gray-600">{specialty}</p>
          <p className="text-gray-600">{experience}</p>
          <p className="text-gray-600">{bio.slice(0, 50)}....</p>
        </div>
      </div>
    </div>
  );
};

export default MechanicCard;
