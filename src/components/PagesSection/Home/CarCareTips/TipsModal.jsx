"use client";
import React from "react";
import Modal from "react-modal";
import "./tips.modules.css";
// import Image from "next/image";

const NewsModal = ({ isOpen, closeModal, tip }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="tip Modal">
      <div className="modal-content ">
        <h1>Car Care Tips</h1>
        <h2 className="mb-12 text-3xl">{tip.title}</h2>
        {/* <Image src={tip.image} width={500} height={300} alt="tips" style={{ width: '50%' }} /> */}
        <img src={tip.image} alt="tips" />
        <p className="mt-12 ">
          Tips Details: <br />
          {tip.description}
        </p>
        <p className="mt-12">Authore Name: {tip.author}</p>
        <p>Publish date: {tip.date}</p>
        {/* Add more information */}
      </div>
      <button
        onClick={closeModal}
        className="text-3xl btn-close  mt-5 "
      >
        Close
      </button>
    </Modal>
  );
};

export default NewsModal;
