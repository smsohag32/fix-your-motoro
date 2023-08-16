import React from "react";
import TipsModal from "./TipsModal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import "./tips.modules.css";
import "../RecentNews/news.css";

import tipsData from './tips.json'; // Import the JSON data
import Image from 'next/image';
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

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
  <><h1 className=" ">Car Care Tips</h1>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <div className="container">
    {tips.map((tip) => (
          <SwiperSlide key={tip.id} >
           <div key={tip.id} 
          className="flex card" 
          onClick={() => openModal(tip)}
          >
           <Image src={tip.image} width={500} height={300} alt="tips" style={{ width: '50%' }}/>
           {/* <img src={tip.image} alt="tips" /> */}
           <div className='ml-12  text-justify'>
           <h2>{tip.title}</h2>
            <p className='mt-12'>Tips Details: <br />{tip.description}</p>
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

export default CarCareTips;
