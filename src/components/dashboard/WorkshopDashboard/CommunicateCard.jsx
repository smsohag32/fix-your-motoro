"use client";
import { Toaster, toast } from "react-hot-toast";
import EmailModal from "./EmailModal";
import { useState } from "react";

const CommunicateCard = (props) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { firstName, lastName, email, bookingDate, vehicle, phone } =
    props.order;
  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="bg-white rounded shadow-md">
      <div className="duration-500 transform gap-8 border-2 w-full flex h-20 items-center">
        <div className="h-full w-1/2 flex justify-center items-center">
          <p className="">
            Name :{" "}
            <span className="text-slate-500">
              {firstName} {lastName}
            </span>
          </p>
        </div>
        <div className="w-full space-y-3 mb-5">
          <p className="text-lg font-semibold opacity-60 pt-3">
            Contact : <span className="text-slate-500">{phone}</span>
          </p>
          <p className="">
            Email : <span className="text-slate-500">{email}</span>
          </p>
        </div>
        <div className="w-full flex justify-center items-center ">
          <button onClick={() => openModal()} className="primary-btn">
            Send Message
          </button>
        </div>
      </div>
      <Toaster />
      <EmailModal isOpen={selectedArticle !== null} closeModal={closeModal} />
    </div>
  );
};

export default CommunicateCard;
