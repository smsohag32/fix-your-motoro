"use client";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "@/styles/gallery.modules.css";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
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
import img10 from "../../../../assets/gallery/gallery10.jpeg";
import img11 from "../../../../assets/gallery/gallery11.jpeg";

const GalleryImage = ({ src, alt, text }) => {
  return (
    <div className="image-container">
      <Image className="w-full h-full p-2" src={src} alt={alt} />
      <div className="image-overlay">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <div className="">
      <PageTitle
        title="Our Gallery"
        subTitle="Choose our collections of services"
      />
      <ResponsiveMasonry
        className="default-container"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          <GalleryImage src={img1} alt="" text="Image 1" />
          <GalleryImage src={img2} alt="" text="Image 2" />
          <GalleryImage src={img3} alt="" text="Image 3" />
          <GalleryImage src={img4} alt="" text="Image 4" />
          <GalleryImage src={img5} alt="" text="Image 5" />
          <GalleryImage src={img6} alt="" text="Image 6" />
          <GalleryImage src={img7} alt="" text="Image 7" />
          <GalleryImage src={img8} alt="" text="Image 8" />
          <GalleryImage src={img9} alt="" text="Image 9" />
          <GalleryImage src={img10} alt="" text="Image 10" />
          <GalleryImage src={img11} alt="" text="Image 11" />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GallerySection;
