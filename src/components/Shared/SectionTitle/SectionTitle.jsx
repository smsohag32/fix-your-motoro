import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex w-full text-center items-center flex-col justify-center max-w-xl mx-auto">
      <h1 className="text-5xl opacity-80 tracking-widest font-bold">{title}</h1>
      <p className="font-bold opacity-80 text-lg tracking-wider">{subTitle}</p>
      <hr className="w-20 mx-auto primary-border mt-3" />
    </div>
  );
};

export default SectionTitle;
