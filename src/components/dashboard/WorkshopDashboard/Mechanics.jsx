"use client";
import React, { useEffect, useState } from "react";
import MechanicCard from "./MechanicCard";
import useAuth from "@/hooks/useAuth";
import useWorkshopMechanic from "@/hooks/useWorkshopMechanic";
import Spinner from "@/components/Spinners/Spinner";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";

const Mechanics = () => {
  const user = useAuth();
  const email = user?.email;
  const { workshopMechanics, wOLoading } = useWorkshopMechanic(email);

  if (wOLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-2 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {workshopMechanics && workshopMechanics.length > 0 ? (
          workshopMechanics?.map((mechanic) => (
            <MechanicCard key={mechanic.id} mechanic={mechanic} />
          ))
        ) : (
          <div className="flex justify-center items-center md:w-[1000px] md:h-[80vh]">
            <div className="w-full">
              <EmptyState
                label={"Post a new Mechanic"}
                address={"/dashboard/workshop/service_form"}
                message={"No Mechanics Found For Your Workshop"}
              ></EmptyState>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mechanics;