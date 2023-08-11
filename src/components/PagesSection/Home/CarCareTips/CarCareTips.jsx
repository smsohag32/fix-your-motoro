import React from "react";

<<<<<<< HEAD
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import "./tips.modules.css";
import "../RecentNews/news.css";

import tipsData from "./tips.json"; // Import the JSON data
import Image from "next/image";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

function CarCareTips() {
  const tips = tipsData.tips; // Access the tips array
  const [selectedTip, setSelectedTip] = useState(null);

  const openModal = (tip) => {
    setSelectedTip(tip);
  };

  const closeModal = () => {
    setSelectedTip(null);
  };
  return (
    <>
      <SectionTitle
          title={"Car Care Tips"}
          subTitle="What to see our Care Tips?"
        />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div className="container">
          {tips.map((tip, index) => (
            <SwiperSlide key={index}>
              <div
                key={tip.id}
                className="flex card"
                onClick={() => openModal(tip)}
              >
                <Image src={tip.image} width={250} height={250} alt="tips" />
                <div className="ml-12 text-justify text-orange-600">
                  <h2>{tip.title}</h2>
                  <p className="mt-12 text-orange-600">
                    Tips Details: <br />
                    {tip.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <TipsModal
        isOpen={selectedTip !== null}
        closeModal={closeModal}
        tip={selectedTip || {}}
      />
    </>
  );
}
=======
const CarCareTips = () => {
  return <div></div>;
};
>>>>>>> 4fb5c2c9340ab025db3653ce0e2fa3b0dba5c6bd

export default CarCareTips;
