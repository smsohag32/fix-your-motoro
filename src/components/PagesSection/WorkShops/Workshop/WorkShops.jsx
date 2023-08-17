// "use client";
// import React, { useState } from "react";
// import WorkShop from "./workshopData.json";
// import Image from "next/image";
// import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
// function WorkShops() {
//   const workshops = WorkShop.workshops; // Access the workshops array
//   const [selectedWorkshops, setSelectedWorkshops] = useState(null);
//   console.log(workshops);
//   const [garage, setGarage] = useState([]);

//   // useEffect(() => {
//   //   fetch("")
//   //     .then((res) => res.json())
//   //     .then((data) => setBlog(data))
//   //     .catch((error) => {
//   //       console.error("Error fetching data:", error);
//   //     });
//   // }, []);

//   const openModal = (workshops) => {
//     setSelectedWorkshops(workshops);
//   };

//   const closeModal = () => {
//     setSelectedWorkshops(null);
//   };

//   return (
//     <div className="default-container py-12  mt-12">
//       <div className="grid grid-cols-1 my-12 md:grid-cols-3 gap-6">
//         {
//         workshops.map((workshop) => (
//           <div
//             key={workshop.id}
//             className="cursor-pointer flex flex-col primary-shadow hover:scale-95 duration-500 pb-5 transition-all transform items-center"
//             onClick={() => openModal(workshop)}
//           >

//             <Image
//               src={workshop.image}
//               alt="news"
//               width={280}
//               className="w-full h-44 object-cover"
//               height={280}
//             />
//             <h2 className="text-lg px-3 font-semibold tracking-wider mt-4 md:text-xl">
//               {workshop.name}
//             </h2>
//           </div>
//         ))}
//       </div>
//       <SingleWorkshop
//         isOpen={selectedWorkshops !== null}
//         closeModal={closeModal}
//         workshop={selectedWorkshops || {}}
//       />
//     </div>
//   );
// }

// export default WorkShops;
"use client";
import React, { useEffect, useState } from "react";
import WorkshopFilter from "../WorkshopFilter/WorkshopFilter";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";

const WorkShops = () => {
  const [workshopsData, setWorkshopsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/workshops");
      const data = await response.json();
      setWorkshopsData(data);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="my-8 text-right">
        <WorkshopFilter></WorkshopFilter>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workshopsData.map((workshop) => (
          <SingleWorkshop
            key={workshop.workshop_id}
            workshopsData={workshop}
          ></SingleWorkshop>
        ))}
      </div>
    </>
  );
};

export default WorkShops;
