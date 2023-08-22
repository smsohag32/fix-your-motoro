"use client";
import CardSlider from "@/components/CardsSlider/CardsSlider";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import StarRating from "../../Home/SuccessReviews/StarRating";

const  WorkshopDetails = ({ isOpen, closeModal, workshop }) => {
  const [products, setProducts] = useState([]);
  const [pLoading, setPLoading] = useState(false);
  console.log(workshop);
  useEffect(() => {
    setPLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/all/products");
        const data = await response.json();
        setProducts(data);
        setPLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setPLoading(false);
      }
    };
    fetchData();
  }, []);
  const {name,image,description,email,workshopCode,address,rating } =workshop
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="workshop Modal"
    >
      <div className="modal-content mt-20">
        
       
        <Image width={290}height={390} src={image} alt="workshop" />
        <h2 className="name-text primary-text mb-12 text-3xl">{name}</h2>
        <p className="mt-12">workshop Details: {description}</p>
        <p className="mt-12">Code: {workshopCode}</p>
        <p>Email: {email}</p>
        <p className="">Address: {address}</p>
        {/* <p className="">Rating: {rating}</p>
         */}
          <div className="">
                    <div className="flex mr-2">
                      <StarRating rating={rating} />
                      <p className="ml-1">{rating}</p>
                    </div>
                  </div>
      </div>
      <div className="mt-8 pb-8">
        <SectionTitle
          title="Products Zone"
          subTitle="Order now our best products"
        />
        <div>
          <CardSlider items={products} loading={pLoading} />
        </div>
      </div>
      <button onClick={closeModal} className="primary-btn">
        Close
      </button>
    </Modal>
  );
};

export default WorkshopDetails;
