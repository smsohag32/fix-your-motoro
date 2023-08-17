// import PageTitle from "@/components/Shared/PageTitle/PageTitle";
// import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
// import React from "react";

// const WorkShops = () => {
//   return (
//     <div>
//       <PageTitle title="Workshop" subTitle={"You are treble now!"} />
//       <div className="default-container">
//         <SectionTitle
//           title={"Our Featured Gradge"}
//           subTitle={"to be like you"}
//         />
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default WorkShops;

"use client";
import React, { useState } from "react";
import WorkShop from "../../../../utils/data/workShopData";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import SingleWorkshop from "../SingleWorkShop/SingleWorkshop";
function WorkShops() {
  const workshopsData = WorkShop.workshops; // Access the workshops array
  const [selectedWorkshops, setSelectedWorkshops] = useState(null);
  console.log(workshopsData);
  const [garage, setGarage] = useState([]);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setBlog(data))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const openModal = (workshops) => {
    setSelectedWorkshops(workshops);
  };

  const closeModal = () => {
    setSelectedWorkshops(null);
  };

  return (
    <div className="default-container py-12">
      <SectionTitle
        title="Special Workshop"
        subTitle="Recent motor servicing Workshop"
      />
      <div className="grid grid-cols-1 my-12 md:grid-cols-3 gap-6">
        {
        workshopsData.map((workshop) => (
          <div
            key={workshop.id}
            className="cursor-pointer flex flex-col primary-shadow hover:scale-95 duration-500 pb-5 transition-all transform items-center"
            onClick={() => openModal(workshop)}
          >

            <Image
              src={workshop.image}
              alt="news"
              width={280}
              className="w-full h-44 object-cover"
              height={280}
            />
            <h2 className="text-lg px-3 font-semibold tracking-wider mt-4 md:text-xl">
              {workshop.name}
            </h2>
          </div>
        ))}
      </div>
      <SingleWorkshop
        isOpen={selectedWorkshops !== null}
        closeModal={closeModal}
        workshop={selectedWorkshops || {}}
      />
    </div>
  );
}

export default WorkShops;
