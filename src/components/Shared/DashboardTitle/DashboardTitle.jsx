"use client";
import React from 'react';

const DashboardTitle = ({ title, subTitle  }) => {
    return (
        <div className="w-full grid place-items-center bg-cover text-center py-16 bg-no-repeat bg-[url('https://i.ibb.co/R0YmLwn/gallery9-1.png')]">
      <h1 className="text-5xl font-bold tracking-widest opacity-80">{title}</h1>
      <p className="text-lg font-bold tracking-wider opacity-80">{subTitle}</p>
    </div>
    );
};

export default DashboardTitle;