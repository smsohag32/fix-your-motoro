"use client";
import React from "react";
import "@/styles/expert.modules.css";

const ComplaintBoxSingleCard = ({ singleCard }) => {
  const { id, userName, userEmail, workshopName, issue, message, date } =
    singleCard;

  return (
    //  card
    <div className="p-5 transition-all duration-500 transform rounded-lg cursor-pointer bg-slate-50 primary-shadow hover:scale-95">
      <h1>
        <span className="font-semibold ">Name</span>: {userName}
      </h1>
      <h1>
        <span className="font-semibold ">Email</span>: {userEmail}
      </h1>
      <h1>
        <span className="font-semibold ">Workshop Name</span>: {workshopName}
      </h1>
      <h1>
        <span className="font-semibold ">Issue</span>: {issue}
      </h1>
      <p className="flex justify-between">
        <span className="font-semibold ">Complaint message: </span> {message}
      </p>
      <p>
        <span className="font-semibold ">Data</span> : {date}
      </p>
    </div>
  );
};

export default ComplaintBoxSingleCard;
