"use client";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import img1 from "../../../../assets/gallery/gallery1.jpeg";
import img2 from "../../../../assets/gallery/gallery2.jpeg";
import img3 from "../../../../assets/gallery/gallery3.jpeg";
import img4 from "../../../../assets/gallery/gallery4.jpeg";
import img5 from "../../../../assets/gallery/gallery5.jpeg";
import img6 from "../../../../assets/gallery/gallery6.jpeg";
import img7 from "../../../../assets/gallery/gallery7.jpeg";
import img8 from "../../../../assets/gallery/gallery8.jpeg";
import img9 from "../../../../assets/gallery/gallery9.jpeg";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";

const GallerySection = () => {
  return (
    <div className="py-24 mt-4">
      <PageTitle
        title="Our Gallery"
        subTitle="Choice our collections of services"
      />
      <ResponsiveMasonry
        className="default-container"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          <Image className="w-full h-full p-2" src={img1} alt="" width="500" height="300" />
          <Image className="w-full h-full p-2" src={img2} alt="" width="700" height="400" />
          <Image className="w-full h-full p-2" src={img3} alt="" width="400" height="500" />
          <Image className="w-full h-full p-2" src={img4} alt="" width="550" height="350" />
          <Image className="w-full h-full p-2" src={img5} alt="" width="350" height="450" />
          <Image className="w-full h-full p-2" src={img6} alt="" width="600" height="200" />
          <Image className="w-full h-full p-2" src={img7} alt="" width="540" height="420" />
          <Image className="w-full h-full p-2" src={img8} alt="" width="700" height="410" />
          <Image className="w-full h-full p-2" src={img9} alt="" width="400" height="500" />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GallerySection;
