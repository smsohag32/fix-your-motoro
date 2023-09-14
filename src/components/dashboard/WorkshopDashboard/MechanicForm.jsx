"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DashboardTitle from "@/components/Shared/DashboardTitle/DashboardTitle";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";

const ServiceFrom = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imgHostingKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const imgHosting = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

  const onSubmit = async (data) => {
    const imgTwo = new FormData();
    const workshopImage = user?.photoURL;
    imgTwo.append("image", data.mechanic_image[0]);

    fetch(imgHosting, {
      method: "POST",
      body: imgTwo,
    })
      .then((response) => response.json())
      .then((imgTwoRes) => {
        if (imgTwoRes.success) {
          const service = {
            workshop_email: user?.email,
            workshop_image: workshopImage,
            mechanic_name: data.mechanic_name,
            mechanic_image: imgTwoRes.data.display_url,
            service_category: data.service_category,
            service_description: data.service_description,
            service_duration: data.service_duration,
            service_price: data.service_price,
            benefits: data.benefits,
            warranty: data.warranty,
          };

          axios
            .post(
              `https://fya-backend.vercel.app/--------------------`,
              service
            )
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "New Mechanic Has been added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            });
        }
      });
  };

  return (
    <div>
      <DashboardTitle
        title="Add Mechanic"
        subTitle="Add Your New Mechanic stuff"
      />
      <div className="max-w-xl mx-auto mt-4 md:my-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded shadow"
        >
          <div className="mb-4">
            <label htmlFor="mechanicName" className="block mb-1 font-medium">
              Mechanic Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              id="mechanicName"
              {...register("mechanic_name", { required: true })}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="specialty" className="block mb-1 font-medium">
              Specialty
            </label>
            <input
              placeholder="Engine Expert"
              type="text"
              id="specialty"
              className="w-full p-2 border rounded"
              {...register("specialty", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block mb-1 font-medium">
              Experience
            </label>
            <input
              placeholder="10 Years....."
              type="text"
              id="experience"
              className="w-full p-2 border rounded"
              {...register("experience", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block mb-1 font-medium">
              Location
            </label>
            <input
              type="text"
              placeholder="New York, USA"
              id="location"
              className="w-full p-2 border rounded"
              {...register("location", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="serviceDescription"
              className="block mb-1 font-medium"
            >
              Mechanic Short Bio
            </label>
            <textarea
              placeholder="say something about the new mechanic"
              id="service_description"
              className="w-full p-2 border rounded"
              rows="3"
              {...register("service_description", { required: true })}
            />
          </div>

          <div className="">
            <div className="mb-4">
              <label htmlFor="mechanicImage" className="block mb-1 font-medium">
                Mechanic Image
              </label>
              <input
                type="file"
                id="mechanic_image"
                {...register("mechanic_image", { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.service_image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="Submit"
              className="w-full rounded-lg primary-btn "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceFrom;
