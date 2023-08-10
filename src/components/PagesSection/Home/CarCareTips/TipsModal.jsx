"use client";
import React from "react";
import Modal from "react-modal";
import "./tips.modules.css";

const NewsModal = ({ isOpen, closeModal, tip }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="tip Modal">
      <div className="modal-content text-orange-600">
        <h1>Car Care Tips</h1>
        <h2 className="mb-12 text-3xl">{tip.title}</h2>
        <img src={tip.image} alt="news" />
        <p className="mt-12 text-black-800">
          Tips Details: <br />
          {tip.description}
        </p>
        <p className="mt-12">Authore Name: {tip.author}</p>
        <p>Publish date: {tip.date}</p>
        {/* Add more information */}
      </div>
      <button
        onClick={closeModal}
        className="text-white text-3xl mt-5 bg-red-900"
      >
        Close
      </button>
    </Modal>
  );
};

export default NewsModal;
