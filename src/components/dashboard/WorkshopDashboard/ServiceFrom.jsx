"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DashboardTitle from '@/components/Shared/DashboardTitle/DashboardTitle';
import { toast } from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';
// error
const ServiceFrom = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset ,   formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const serviceDate = {
      workshop_email: user.email,
      ...data
    }
    console.log(serviceDate);
    try {
      const response = await axios.post(`https://fya-backend.vercel.app/api/v1/auth/services/${user?.email}`, serviceDate);
      toast.success('Service added successfully');
      reset();
    } catch (error) {
      toast.error('Error adding Service');
    }
  };

  return (
    <div>
      <DashboardTitle
        title="Add Service"
        subTitle="Welcome to the Add Service"
      />
      <div className="max-w-xl md:my-8 mt-4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow">
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
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

          <div className='grid md:grid-cols-2 gap-4'>
            <div className="mb-4">
              <label htmlFor="workshopImage" className="block font-medium mb-1">
                Workshop Image
              </label>
              <input
                type="text"
                id="workshop_image"
                {...register('workshop_image', { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.workshop_image && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="serviceImage" className="block font-medium mb-1">
                Service Image
              </label>
              <input
                type="text"
                id="service_image"
                {...register('service_image', { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.service_image && <span className="text-red-500">This field is required</span>}
            </div>

          </div>
          <div className="mt-4">
            <input type="submit" value="Submit" className="w-full rounded-lg primary-btn " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceFrom;
