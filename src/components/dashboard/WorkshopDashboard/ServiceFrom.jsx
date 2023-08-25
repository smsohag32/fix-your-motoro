"use client";
import DashboardTitle from "@/components/Shared/DashboardTitle/DashboardTitle";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ServiceFrom = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=4ef7007f7046a0746df3c9c722fd7459`;

  const [workshopData, setWorkshopData] = useState({
    workshopId: "",
    serviceName: "",
    serviceCategory: "",
    serviceDescription: "",
    serviceDuration: "",
    servicePrice: "",
    benefits: "",
    serviceImage: "",
    warranty: "",
    customerReviews: "",
    workshopImage: ""

  });



  const addNewClass = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingApi, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const newClass = {
            workshop_id: data.workshopId,
            service_name: data.serviceName,
            service_category: data.serviceCategory,
            service_description: data.serviceDescription,
            service_duration: data.serviceDuration,
            service_price: data.servicePrice,
            benefits: data.benefits,
            customer_reviews: data.customerReviews,
            service_image: imgResponse.data.display_url,
            workshop_image: imgResponse.data.display_url,
            warranty: data.warranty,
          };
          axios.post(`https://fya-backend.vercel.app/api/v1/auth/services/$%7Buser?.email}`, newClass)
            .then(res => {
              if (res.data.insertedId) {

              }

            })
        }
      });
  };


  return (
    <div>
      <DashboardTitle
        title="Add Service"
        subTitle="Welcome to the Add Service"
      />
      <div className="max-w-xl py-4 mx-auto">
        <form onSubmit={handleSubmit(addNewClass)} className="p-6 bg-white rounded shadow">
          <h2 className="mb-4 text-2xl font-semibold">Add Workshop Details</h2>

          <div className="mb-4">
            <label htmlFor="workshopId" className="block mb-1 font-medium">
              Workshop Id
            </label>
            <input
              type="text"
              id="workshopId"
              className="w-full p-2 border rounded"
              {...register("workshop  Id", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="serviceCategory" className="block mb-1 font-medium">
              Service Category
            </label>
            <input
              type="text"
              id="serviceCategory"
              className="w-full p-2 border rounded"
              {...register("serviceCategory", { required: true })}
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
              id="serviceDescription"
              className="w-full p-2 border rounded"
              rows="4"
              {...register("serviceDescription", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="serviceDuration" className="block mb-1 font-medium">
              Service Duration
            </label>
            <input
              type="text"
              id="serviceDuration"
              className="w-full p-2 border rounded"
              {...register("serviceDuration", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="servicePrice" className="block mb-1 font-medium">
              Service Price
            </label>
            <input
              type="text"
              id="servicePrice"
              className="w-full p-2 border rounded"
              {...register("servicePrice", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="customerReviews " className="block mb-1 font-medium">
              Customer Reviews
            </label>
            <textarea
              id="customerReviews"
              className="w-full p-2 border rounded"
              rows="4"
              {...register("customerReviews", { required: true })}
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

          <div className="grid md:grid-cols-2 gap-2">
            <div className="mb-4">
              <label htmlFor="serviceImage" className="block mb-1 font-medium">
                Service Image
              </label>
              <input
                type="file"
                id="serviceImage"
                accept="image/*"
                className="w-full"
                {...register("image", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="workshopImage" className="block mb-1 font-medium">
                Workshop Image
              </label>
              <input
                type="file"
                id="workshopImage"
                accept="image/*"
                className="w-full"
                {...register("image", { required: true })}
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="w-full rounded-lg primary-btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceFrom;
