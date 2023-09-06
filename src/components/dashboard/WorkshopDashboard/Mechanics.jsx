"use client";
import React, { useEffect, useState } from "react";
import MechanicCard from "./MechanicCard";
import useAuth from "@/hooks/useAuth";
import useWorkshopMechanic from "@/hooks/useWorkshopMechanic";
import Spinner from "@/components/Spinners/Spinner";

const Mechanics = () => {
  const user = useAuth();
  const email = user?.email;
  const { workshopMechanics, wOLoading } = useWorkshopMechanic(email);

  if (wOLoading) {
    return <Spinner />;
  }
  console.log(workshopMechanics);
  return (
    <div className="px-2 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {workshopMechanics?.map((mechanic) => (
          <MechanicCard key={mechanic.id} mechanic={mechanic} />
        ))}
      </div>
    </div>
  );
};

export default Mechanics;
