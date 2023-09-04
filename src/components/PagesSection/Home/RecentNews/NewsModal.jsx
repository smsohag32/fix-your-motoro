"use client";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import { Toaster, toast } from "react-hot-toast";

const NewsModal = ({ isOpen, closeModal, article }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Article Modal"
      style={customStyles}
    >
      <div className="modal-content mt--20">
        <Image width={290} height={390} src={article?.image} alt="news" />
        <h1>Motor Servicing News</h1>
        <h2 className="mb-12 text-3xl">{article.title}</h2>
        <p className="mt-12">News Details: {article.description}</p>
        <p className="mt-12">Authore Name: {article.author}</p>
        <p>Publish date: {article.date}</p>
      </div>
      <button onClick={closeModal} className="primary-btn">
        Close
      </button>
      <Toaster />
    </Modal>
  );
};

export default NewsModal;
