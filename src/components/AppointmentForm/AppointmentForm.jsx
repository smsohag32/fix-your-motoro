"use client"

import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';

const AppointmentForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('/api/appointment', data);
            toast.success('Appointment booked successfully');
            reset();
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('Failed to book the appointment');
        }
    };

    return (
        <>
            <Helmet>
                <title>FYM | Appointment</title>
            </Helmet>
            <PageTitle title="Appointment" subTitle="Appointment page" />
            <div className="max-w-4xl p-8 mx-auto mt-16">
                <h1 className="mb-8 text-2xl font-bold text-start md:text-center">Get Appointment For Best Services</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="fullName" className="block text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder="David John"
                                required
                                {...register("fullName")}
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder="john.david@gmail.com"
                                required
                                {...register("email")}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="phone" className="block text-sm font-medium">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder="+8801............"
                                required
                                {...register("phone")}
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="address" className="block text-sm font-medium">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder="7891 Boston Road
                Brooklyn, NY 11237"
                                required
                                {...register("address")}
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
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder="Toyota Land Cruiser Prado - 2020"
                                required
                                {...register("vehicle")}
                            />
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="serviceRequest" className="block text-sm font-medium">
                                Service Request
                            </label>
                            <input
                                type="text"
                                id="serviceRequest"
                                name="serviceRequest"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder="Engine Diagnostics"
                                required
                                {...register("serviceRequest")}
                            />
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label
                                htmlFor="appointmentDate"
                                className="block text-sm font-medium"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                id="appointmentDate"
                                name="appointmentDate"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                required
                                {...register("appointmentDate")}
                            />
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label
                                htmlFor="comment"
                                className="block text-sm font-medium"
                            >
                                Comment
                            </label>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#69d94f]"
                                placeholder='comment'
                                {...register("comment")}
                            />
                        </div>
                    </div>

                    {/* ... More form fields */}

                    <div className="justify-end md:flex">
                        <button type="submit" className="rounded-md primary-btn">
                            Get Appointment
                        </button>
                        <Toaster />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AppointmentForm;
