"use client";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const NewsModal = ({ isOpen, closeModal, article }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Article Modal"
    >
      <div className="modal-content mt--20">
        <h1>Motor Servicing News</h1>
        <h2 className="mb-12 text-3xl">{article.title}</h2>
        <Image width={290} height={390} src={article.image} alt="news" />
        <p className="mt-12">News Details: {article.description}</p>
        <p className="mt-12">Authore Name: {article.author}</p>
        <p>Publish date: {article.date}</p>
      </div>
      <button onClick={closeModal} className="primary-btn">
        Close
      </button>
    </Modal>
  );
};

export default NewsModal;
