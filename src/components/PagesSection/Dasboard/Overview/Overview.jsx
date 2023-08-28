"use client";

import AddCarModal from "@/components/Modal/AddCarModal";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import Spinner from "@/components/Spinners/Spinner";
import useAuth from "@/hooks/useAuth";
import useCars from "@/hooks/useCars";
import useUserInfo from "@/hooks/useUserInfo";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { carsData, refetch, carLoading } = useCars();
  const { user } = useAuth();
  const { userInfo, cLoading } = useUserInfo();
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddCar = async (data) => {
    const newCar = {
      ...data,
      email: user?.email,
    };
    const res = await axios.post(
      `https://fya-backend.vercel.app/api/v1/auth/cars`,
      newCar
    );
    console.log(res);
    closeModal();
    reset();
    refetch();
  };

  console.log(userInfo);
  if (cLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.displayName}!</h1>
      <section className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Your Information</h2>
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
      </section>
      {userInfo?.result?.role ? (
        ""
      ) : (
        <section className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Your Vehicles</h2>
          <div className="min-h-[60vh] md:p-5 p-1">
            {carsData?.length > 0 ? (
              carsData?.map((item) => (
                <div key={item._id} className="flex flex-col p-5 h-full">
                  <div
                    key={item._id}
                    className="p-5 mb-4 flex flex-col md:flex-row gap-5 bg-gray-300"
                  >
                    <p>{item.car_name}</p>
                    <p>{item.brand}</p>
                    <p>{item.model}</p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="outline-btn "
                      onClick={() => setIsOpen(true)}
                    >
                      Add New
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <EmptyState
                message={"You have not added any vehicles"}
                label={"Add Your Vehicles"}
                setIsOpen={setIsOpen}
                address={" "}
              />
            )}
          </div>
        </section>
      )}

      <AddCarModal
        handleSubmit={handleSubmit}
        handleAddCar={handleAddCar}
        closeModal={closeModal}
        isOpen={isOpen}
        register={register}
        userInfo={user?.email}
      />
    </div>
  );
};

export default Overview;
