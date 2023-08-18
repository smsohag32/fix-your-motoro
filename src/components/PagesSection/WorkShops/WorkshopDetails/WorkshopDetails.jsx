"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const  WorkshopDetails = ({ isOpen, closeModal, workshop }) => {
  console.log(workshop);

  const {name,image,description,email,address } =workshop
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="workshop Modal"
    >
      <div className="modal-content mt-20">
        
       
        <Image width={290}height={390} src={image} alt="workshop" />
        <h2 className="mb-12 text-3xl">{name}</h2>
        <p className="mt-12">workshop Details: {description}</p>
        <p className="mt-12">Address: {address}</p>
        <p>Email: {email}</p>
        {/* <p>Email: {products[0].title}</p> */}
      </div>
      <button onClick={closeModal} className="primary-btn">
        Close
      </button>
    </Modal>
  );
};

export default WorkshopDetails;
