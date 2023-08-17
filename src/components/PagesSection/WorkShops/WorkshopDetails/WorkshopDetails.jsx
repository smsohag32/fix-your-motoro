// import React from "react";

// const SingleWorkshop = () => {
//   return <div></div>;
// };

// export default SingleWorkshop;
"use client";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const SingleWorkshop = ({ isOpen, closeModal, workshop }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="workshop Modal"
    >
      <div className="modal-content mt--20">
        <h1>Motor Servicing News</h1>
        <h2 className="mb-12 text-3xl">{workshop.name}</h2>
        <Image width={290} height={390} src={workshop.image} alt="news" />
        <p className="mt-12">workshop Details: {workshop.description}</p>
        <p className="mt-12">Address: {workshop.address}</p>
        <p>address: {workshop.email}</p>
      </div>
      <button onClick={closeModal} className="primary-btn">
        Close
      </button>
    </Modal>
  );
};

export default SingleWorkshop;
