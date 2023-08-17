"use client";
import ServiceContext from "@/context/ServiceContext";
import React, { useState } from "react";

const ServicesProvider = ({ children }) => {
  const [service, setService] = useState({});
  const serviceValue = { service, setService };

  return (
    <ServiceContext.Provider value={serviceValue}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServicesProvider;
