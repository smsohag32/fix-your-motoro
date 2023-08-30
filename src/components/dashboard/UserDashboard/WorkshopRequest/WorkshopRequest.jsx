"use client"
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const WorkshopRequest = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  
  // image upload to imgbb
  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("image", data.data.url);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true)
    try {
      await axios.put(`https://fya-backend.vercel.app/api/v1/auth/workshops/${user?.email}`, data);
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
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="workshop name"
              required
              {...register("name")}
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
              className="mt-1 p-2 w-full border rounded-md "
              placeholder=""
              value={user ? user.email : ""}
              required
              {...register("email")}
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
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="description"
              required
              {...register("description")}
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
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={user ? user.email : ""}
              required
              {...register("workshop_email")}
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
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="location"
              required
              {...register("location")}
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
              onChange={uploadImage}
              className="mt-1 p-1 w-full border rounded-md"
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
