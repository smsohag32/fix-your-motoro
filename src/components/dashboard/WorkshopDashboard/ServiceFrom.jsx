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
    const imgOne = new FormData();
    const imgTwo = new FormData();
    imgOne.append("image", data.workshop_image[0]);
    imgTwo.append("image", data.service_image[0]);
    fetch(imgHosting, {
      method: "POST",
      body: imgOne,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          fetch(imgHosting, {
            method: "POST",
            body: imgTwo,
          })
            .then((response) => response.json())
            .then((imgTwoRes) => {
              if (imgTwoRes.success) {
                const service = {
                  workshop_email: user.email,
                  workshop_image: imgResponse.data.display_url,
                  service_image: imgTwoRes.data.display_url,
                  title: data.title,
                  workshop_id: data.workshop_id,
                  service_name: data.service_name,
                  service_category: data.service_category,
                  service_description: data.service_description,
                  service_duration: data.service_duration,
                  service_price: data.service_price,
                  benefits: data.benefits,
                  warranty: data.warranty,
                };
                // console.log(service)
                axios
                  .post(
                    `https://fya-backend.vercel.app/api/v1/auth/services/${user?.email}`,
                    service
                  )
                  .then((uploaded) => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Service Added sucessfull",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    reset();
                  });
              }
            });
        }
      });
  };

  return (
    <div>
      <DashboardTitle
        title="Add Service"
        subTitle="Welcome to the Add Service"
      />
      <div className="max-w-xl mx-auto mt-4 md:my-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded shadow"
        >
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="w-full p-2 border rounded"
          />

          <div className="mb-4">
            <label htmlFor="workshopId" className="block mb-1 font-medium">
              Workshop Id
            </label>
            <input
              type="text"
              id="workshop_id"
              className="w-full p-2 border rounded"
              {...register("workshop_id", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="workshopId" className="block mb-1 font-medium">
              Service Name
            </label>
            <input
              type="text"
              id="service_name"
              className="w-full p-2 border rounded"
              {...register("service_name", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="serviceCategory" className="block mb-1 font-medium">
              Service Category
            </label>
            <input
              type="text"
              id="service_category"
              className="w-full p-2 border rounded"
              {...register("service_category", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="serviceDescription"
              className="block mb-1 font-medium"
            >
              Service Description
            </label>
            <textarea
              id="service_description"
              className="w-full p-2 border rounded"
              rows="4"
              {...register("service_description", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="serviceDuration" className="block mb-1 font-medium">
              Service Duration
            </label>
            <input
              type="text"
              id="service_duration"
              className="w-full p-2 border rounded"
              {...register("service_duration", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="servicePrice" className="block mb-1 font-medium">
              Service Price
            </label>
            <input
              type="text"
              id="service_price"
              className="w-full p-2 border rounded"
              {...register("service_price", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="benefits" className="block mb-1 font-medium">
              Benefits
            </label>
            <textarea
              id="benefits"
              className="w-full p-2 border rounded"
              rows="4"
              {...register("benefits", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="warranty" className="block mb-1 font-medium">
              Warranty
            </label>
            <input
              type="text"
              id="warranty"
              className="w-full p-2 border rounded"
              {...register("warranty", { required: true })}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="mb-4">
              <label htmlFor="workshopImage" className="block mb-1 font-medium">
                Workshop Image
              </label>
              <input
                type="file"
                id="workshop_image"
                {...register("workshop_image", { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.workshop_image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="serviceImage" className="block mb-1 font-medium">
                Service Image
              </label>
              <input
                type="file"
                id="service_image"
                {...register("service_image", { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.service_image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="mt-4">
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
