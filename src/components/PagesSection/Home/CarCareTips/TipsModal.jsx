"use client";
import React from "react";
import Modal from "react-modal";
import "./tips.modules.css";
import Image from "next/image";

const NewsModal = ({ isOpen, closeModal, tip }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="tip Modal">
      <div className="modal-content ">
        <h1>Car Care Tips</h1>
        <h2 className="mb-12 text-3xl">{tip.title}</h2>

        <Image src={tip?.image} width={350} height={350} alt="news" />
        <p className="mt-12 text-black-800">
          Tips Details: <br />
          {tip.description}
        </p>
        <p className="mt-12">Authore Name: {tip.author}</p>
        <p>Publish date: {tip.date}</p>
        {/* Add more information */}
      </div>
<<<<<<< HEAD
      <button
        onClick={closeModal}
        className="mt-5 text-3xl btn-close "
      >
=======
      <button onClick={closeModal} className="text-3xl btn-close  mt-5 ">
>>>>>>> e5f955382bccd2db8b1d2673c3e244148358bdfd
        Close
      </button>
    </Modal>
  );
};

export default NewsModal;
