"use client"
import StarRating from "@/components/PagesSection/Home/SuccessReviews/StarRating";
import SingleProductCard from "@/components/PagesSection/WorkShops/SingleProductCard/SingleProductCard";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const WorkShopDetail = ({ params }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const _id = params.id;
  const notify = () => toast("Booking confirmed..");
 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/workshops/${_id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [_id]);

  const handleBookNow = () => {
    setShowBookingForm(true);
  };
  console.log(product);
  
   const onSubmit = async (data) => {
     const serviceData = {
       workShop_id: _id,
       workShop_email: product.email,
       workShop_code: product.workshopCode,
       ...data,
     };

     console.log(serviceData);

     const response = await fetch(
       "https://fya-backend.vercel.app/api/v1/auth/orders",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(serviceData),
       }
     );
     const result = await response.json();
     console.log(result);
     reset();
     notify();
   };



  console.log(product);

   if (loading) {
     return <MidSpinner />; 
   }

  return (
    <div className="relative mt-36 p-5">
      <div className="md:w-4/6 lg:w-2/4 mx-auto">
        <div className="md:flex gap-5">
          <Image
            className="object-cover transition-transform duration-500"
            src={product.image}
            alt={product.name}
            width={384}
            height={288}
          />
          <div>
            <p className="text-2xl mb-2">{product.name}</p>
            <p className="mb-2">Workshop Code: {product.workshopCode}</p>
            <p className="mb-2">Email: {product.email}</p>
            <div className="flex mr-2">
              <StarRating rating={product.rating} />
              <p className="ml-1">{product.rating}</p>
            </div>
          </div>
        </div>
        <p>Location: {product.address}</p>
        <p className="my-3  text-slate-500">
          Workshop Details: {product.description}
        </p>

        <button
          onClick={handleBookNow}
          className=" primary-btn text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.products.map((product, index) => (
            <SingleProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      {/* Booking Form */}
      {showBookingForm && (
        <div className="absolute -top-7 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-75 z-20">
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Booking Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="vehicle"
                    className="block text-sm font-medium"
                  >
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
              <div className="space-y-4 mt-4">
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
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium"
                    >
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
                    <label
                      htmlFor="postal"
                      className="block text-sm font-medium"
                    >
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

              <div className="md:flex justify-between">
                <button type="submit" className="mt-4 primary-btn rounded-md">
                  Submit
                </button>
              </div>
            </form>
            <div className=" absolute -top-7 -right-3 mt-4">
              <button
                className="bg-red-400 hover:bg-red-600  font-bold py-1 px-2 rounded-full transition-all duration-300 ease-in-out"
                onClick={() => {
                  console.log("hello there");
                  setShowBookingForm(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default WorkShopDetail;
