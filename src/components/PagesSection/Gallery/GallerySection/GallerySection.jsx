"use client";
import React , {useState , useEffect} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "@/styles/gallery.modules.css";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Image from "next/image";


const GalleryImage = ({ src, alt, text }) => {
  return (
    <div className="image-container">
      <Image  className="w-full h-full p-2" width="800" height="600"  src={src} alt={alt} />
      <div className="image-overlay">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);

  {
    /*json data fetch section */
  }
  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="">
      <PageTitle
        title="Our Gallery"
        subTitle="Our Gallery Image"
      />
      <ResponsiveMasonry
        className="default-container"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {
            gallery.map((singleCard , index) => (
              <GalleryImage key={index} src={singleCard.gallery} alt="img" text="Image 1" />
            ))
          }
          
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GallerySection;
