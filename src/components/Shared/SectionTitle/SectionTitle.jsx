import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl py-8 mx-auto text-center ">
      <h1 className="text-5xl font-bold tracking-widest opacity-80">{title}</h1>
      <p className="text-lg font-bold tracking-wider opacity-80">{subTitle}</p>
      <hr className="w-20 mx-auto mt-3 primary-border" />
    </div>
  );
};

export default SectionTitle;
