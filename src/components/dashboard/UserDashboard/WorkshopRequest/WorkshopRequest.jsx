"use client"
import UploadImage from "@/components/UploadImage/UploadImage";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const WorkshopRequest = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true)

    const mapLinkArray = data.map_link.split(',').map(Number);

    const requestWorkshopData = {
      ...data,
      status: "pending",
      map_link: mapLinkArray,
    }
    console.log(requestWorkshopData);
    try {
      await axios.put(`https://fya-backend.vercel.app/api/v1/auth/workshops/${user?.email}`, requestWorkshopData);
      toast.success("Requested successfully");
      reset();
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Request failed. Please try again later.");
      setIsLoading(false);
    }
  }
  return <div className="">
    <h1 className="text-2xl font-bold text-start md:text-center">Request to add Workshop</h1>
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="name" className="block text-sm md:text-lg font-medium">
              Workshop Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              placeholder="workshop name"
              required
              {...register("name")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="image" className="block text-sm md:text-lg font-medium">
              Workshop Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => UploadImage(e, setValue)}
              className="mt-1 p-1 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
            />

          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="address" className="block text-sm md:text-lg font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              placeholder="address"
              required
              {...register("address")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="email" className="block text-sm md:text-lg font-medium">
              User Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              placeholder=""
              value={user ? user.email : ""}
              required
              {...register("email")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="phone" className="block text-sm md:text-lg font-medium">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              placeholder="+880"
              required
              {...register("phone")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="description" className="block text-sm md:text-lg font-medium">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              placeholder="description"
              required
              {...register("description")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="location" className="block text-sm md:text-lg font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              placeholder="location"
              required
              {...register("location")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="workshop_email" className="block text-sm md:text-lg font-medium">
              Workshop Email
            </label>
            <input
              type="email"
              id="workshop_email"
              name="workshop_email"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              defaultValue={user ? user.email : ""}
              required
              {...register("workshop_email")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="map_link" className="block text-sm md:text-lg font-medium">
            Map Link
            </label>
            <input
              type="text"
              id="map_link"
              name="map_link"
              className="mt-1 p-2 w-full  rounded-md focus:outline-sky-500 border border-gray-600"
              required
              placeholder="Enter comma-separated numbers"
              {...register("map_link")}
            />
          </div>

          
          
        </div>
        <div className="md:flex justify-end mt-6">
          <button type="submit" className="bg-blue-500 p-2 text-white hover:bg-blue-700 rounded-md w-full md:w-1/4">
            {isLoading ? "Requesting...": "Request"}
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  </div>
};

export default WorkshopRequest;
