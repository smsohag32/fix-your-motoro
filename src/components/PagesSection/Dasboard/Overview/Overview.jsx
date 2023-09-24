"use client";
import AddCarModal from "@/components/Modal/AddCarModal";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import useAuth from "@/hooks/useAuth";
import useCars from "@/hooks/useCars";
import useUserInfo from "@/hooks/useUserInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "@/components/Spinners/Spinner";
import AdminSummary from "./AdminSummary/AdminSummary";
import WorkshopSummary from "./WorkshopSummary/WorkshopSummary";
import UserSummary from "./UserSummary/UserSummary";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { carsData, refetch, carLoading } = useCars();
  const { user, loading } = useAuth();
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

    if (res.data.insertedId) {
      closeModal();
      reset();
      refetch();
    }
  };
  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);

  if (loading || cLoading) {
    return <Spinner />;
  }
  return (
    <div className="md:mt-16">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.displayName}!</h1>
      <section className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
      </section>
      {cLoading ? (
        ""
      ) : (
        <>
          {userInfo?.user?.role === "admin" ? (
            <AdminSummary />
          ) : userInfo?.user?.role === "workshopCenter" ? (
            <WorkshopSummary />
          ) : (
            <>
            <UserSummary/>
            <section className="bg-white mt-4 p-4 rounded shadow-md mb-4">
              <h2 className="text-lg font-semibold mb-2">Your Vehicles</h2>
              <div data-aos="fade-up" className="min-h-[40vh] md:p-5 p-1">
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
              {userInfo?.user?.role !== "admin" && userInfo?.user?.role !== "workshopCenter" && (
                <div className="pl-6 md:pl-10 ">
                <button
                  className="outline-btn"
                  onClick={() => setIsOpen(true)}
                >
                  Add New
                </button>
              </div>
              )}
            </section>
            </>
          )}
        </>
      )}

      <AddCarModal
        handleSubmit={handleSubmit}
        handleAddCar={handleAddCar}
        closeModal={closeModal}
        isOpen={isOpen}
        register={register}
        userInfo={user?.email}
        refetch={refetch}
      />
    </div>
  );
};

export default Overview;

