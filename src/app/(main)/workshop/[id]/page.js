"use client";
import StarRating from "@/components/PagesSection/Home/SuccessReviews/StarRating";
import SingleProductCard from "@/components/PagesSection/WorkShops/SingleProductCard/SingleProductCard";
import MidSpinner from "@/components/Spinners/MidSpinner";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import UserModal from "@/components/Modal/Modal";
import Swal from "sweetalert2";
import Chat from "@/components/Chat/Chat";
import io from "socket.io-client";
const socket = io.connect("https://steep-mountainous-avatar.glitch.me");


const WorkShopDetail = ({ params }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);

  const [notification, setNotification] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const _id = params.id;

  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fya-backend.vercel.app/api/v1/auth/workshops/${_id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [_id]);

  const onSubmit = async (data) => {
    const serviceData = {
      workShop_id: _id,
      workshop_email: product.email,
      email: user?.email,
      status: "pending",
      ...data,
    };

    const response = await axios.post(
      "https://fya-backend.vercel.app/api/v1/auth/orders",
      serviceData
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Appointment booking success",
      showConfirmButton: false,
      timer: 1500,
    });
    setIsOpen(false);
    reset();
  };

  if (loading) {
    return <MidSpinner />;
  }

  return (
    <div className=" mt-40 mb-24 p-5 default-container">
      <div className="">
        <div className="md:flex md:gap-12 gap-10 items-center">
          <div className="w-full ">
            <Image
              className="w-full md:rounded-lg object-cover transition-transform duration-500"
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
            />
          </div>
          <div className="w-full">
            <p className="text-2xl my-2">{product.name}</p>
            <p className="mb-2">Workshop Code: {product.workshopCode}</p>
            <p className="mb-2">Email: {product.email}</p>
            <p className="my-3">Location: {product.address}</p>
            <p className="my-3  text-slate-500">
              Workshop Details: {product.description}
            </p>
            <div className="flex mr-2">
              <StarRating rating={product.rating} />
              <p className="ml-1">{product.rating}</p>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className=" primary-btn text-white font-bold py-2 px-4 rounded my-5"
            >
              Book Appointment
            </button>
          </div>
        </div>
 {/* message start */}

      
 <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-3">Chat For Workshop and Client</h2>
          <Chat
            socket={socket}
            username={user?.displayName}
            room={101}
            notification={notification}
            setNotification={setNotification}
          />
        </div>
      </div>
   
        {/* message end */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24 ">
          {product?.products.map((product, index) => (
            <SingleProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <UserModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Booking Request form"}
      >
        <div className=" h-full w-full flex items-center justify-center bg-gray-200 bg-opacity-75 z-20">
          <div className="max-w-5xl  mx-auto w-full bg-white mt-5 md:mt-0 p-6 md:p-12 rounded-lg shadow-lg">
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
                    value={user?.email}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                    placeholder={user?.email}
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
                    <select
                      className=" mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                      {...register("city")}
                    >
                      <option value="dhaka">dhaka</option>
                      <option value="khulna">khulna</option>
                      <option value="chittagong">chittagong</option>
                      <option value="sylhet">sylhet</option>
                      <option value="barishal">barishal</option>
                      <option value="rajshahi">rajshahi</option>
                      <option value="mymensingh">mymensingh</option>
                    </select>
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
                  <div className="">
                    <label htmlFor="map" className="block text-sm font-medium">
                      Latitude *
                    </label>
                    <input
                      type="text"
                      id="map"
                      name="map"
                      placeholder="Type your latitude location"
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                      {...register("user_lat")}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="long" className="block text-sm font-medium">
                      Longitude *
                    </label>
                    <input
                      type="text"
                      id="long"
                      name="long"
                      placeholder="Type your longitude location"
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                      {...register("user_lon")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="servicePlace"
                      className="block text-sm font-medium"
                    >
                      Service Place
                    </label>
                    <select
                      className=" mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-sky-500"
                      {...register("service_type")}
                    >
                      <option value="On Garage">On Garage</option>
                      <option value="On Spot">On Spot</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="md:flex justify-between mt-12">
                <button type="submit" className="primary-btn rounded-md">
                  Submit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-500 text-white px-4 font-semibold tracking-wider py-2 rounded-md hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </UserModal>
    </div>
  );
};

export default WorkShopDetail;
