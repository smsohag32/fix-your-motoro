"use client";

import Spinner from "@/components/Spinners/Spinner";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Page = ({ params }) => {
  const { id } = params;
  const { user } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const notify = () =>
    toast("This Service Has been booked successfully.......");

    const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/services/${id}`
        );
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  

  const onSubmit = async (data) => {
    const serviceData = {
      service_id: id,
      workshop_email: "tr.tonmoy0110.trt@gmail.com",
      service_category: service?.service_category,
      ...data,
    };

    // console.log(serviceData)

    const response = await fetch("https://fya-backend.vercel.app/api/v1/auth/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      })
      const result = await response.json();
      console.log(result);
    // try {
      

    //   // if (response.ok) {
    //   //   // Notify and reset the form
    //   //   notify();
    //   //   reset();
    //   // } else {
    //   //   toast.error("Failed to book the service. Please try again later.");
    //   // }
    // } catch (error) {
    //   toast.error("An error occurred. Please try again later.");
    // }
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="mt-32 max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Work Order Request</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                placeholder="Jason"
                required
                {...register("firstName")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                placeholder="Momoa"
                required
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                placeholder="jason.momoa@gmail.com"
                required
                {...register("email")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                placeholder="+8801............"
                required
                {...register("phone")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="vehicle" className="block text-sm font-medium">
                Vehicle Details
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                placeholder="Toyota Land Cruiser Prado - 2020"
                required
                {...register("vehicle")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="bookingDate"
                className="block text-sm font-medium"
              >
                Date
              </label>
              <input
                type="date"
                id="bookingDate"
                name="bookingDate"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                required
                {...register("bookingDate")}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                  {...register("streetAddress")}
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                  {...register("city")}
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                  {...register("state")}
                />
              </div>
              <div>
                <label htmlFor="postal" className="block text-sm font-medium">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                  {...register("postal")}
                />
              </div>
            </div>
          </div>

          {/* ... More form fields */}

          <div className="md:flex justify-between">
            <button type="submit" className="primary-btn rounded-md">
              Submit
            </button>
            <Toaster />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 font-semibold tracking-wider py-2 rounded-md hover:bg-blue-600"
            >
              Print
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
