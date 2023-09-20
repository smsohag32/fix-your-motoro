"use client";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import { Toaster, toast } from "react-hot-toast";
import ScrollToBottom from "react-scroll-to-bottom";

const NewsModal = ({ isOpen, closeModal, article }) => {
  const customStyles = {
    content: {
      top: "60%",
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
       <ScrollToBottom className="overflow-y-auto max-h-96">

       <div className="modal-content  mt-12">
      <h1 className=" mb-12">Motor Servicing News</h1>
        <Image width={290} height={390} src={article?.image} alt="news" />
        
        <h2 className="mb-12 text-3xl">{article.title}</h2>
        <p className="mt-12">News Details: {article.content}</p>
        <p className="mt-12">Authore Name: Michel Jonson</p>
        <p>Publish date: {article.date}</p>
      </div>

       </ScrollToBottom>
  
      <button onClick={closeModal} className="primary-btn">
        Close
      </button>
      <Toaster />
    </Modal>
  );
};

export default NewsModal;
