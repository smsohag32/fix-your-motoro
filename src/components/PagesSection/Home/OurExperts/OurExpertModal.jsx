"use client";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const NewsModal = ({ isOpen, closeModal, article }) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: "30%",
        },
      };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Article Modal"
      style={customStyles}
      className=""
    >
      <div className="">
        <h1 className="py-4 text-5xl text-center">Our Expert</h1>
        <Image className="" width={400} height={300} src={article.img} alt="news" />
        <p className="mt-4 text-2xl font-bold hover:text-[#f02801]">Name: <span className="">{article.name}</span></p>
        <h2 className="font-bold">Specialty: {article.specialty}</h2>
        <p className="font-bold">Experience: {article.experience}</p>
        <p className=""><span className="font-bold">News Details:</span> {article.about}</p>
      </div>
      <button onClick={closeModal} className="rounded-lg primary-btn">
        Close
      </button>
    </Modal>
  );
};

export default NewsModal;
