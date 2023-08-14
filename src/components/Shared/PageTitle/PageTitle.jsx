import React from "react";

const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="w-full text-center mb-10 bg-[#f02801] py-12">
      <h1 className="text-5xl font-bold tracking-widest text-slate-400 opacity-80">{title}</h1>
      <p className="text-lg font-bold tracking-wider text-slate-400 opacity-80">{subTitle}</p>
    </div>
  );
};

export default PageTitle;
