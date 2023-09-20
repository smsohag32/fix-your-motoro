"use client";
import UserModal from "@/components/Modal/Modal";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Spinner from "@/components/Spinners/Spinner";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BiMessageRounded } from "react-icons/bi";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useRouter } from "next/navigation";

const ServicePage = ({ params }) => {
  const { user } = useAuth();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("On Garage");
  const form = useRef();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/services/${params.service_id}`
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
  }, [setService, params]);

  const {
    service_name,
    service_image,
    service_description,
    service_price,
    workshop_image,
    benefits,
    service_duration,
    customer_reviews,
    warranty,
    _id,
  } = service || {};
  if (loading) {
    return <Spinner />;
  }

  // booking
  const onSubmit = async (data) => {
    const serviceData = {
      service_id: _id,
      workshop_email: service?.workshop_email,
      service_category: service?.service_category,
      service_image: service?.service_image,
      service_name: service?.service_name,
      status: "pending",
      email: user?.email,
      ...data,
    };

    const response = await axios.post(
      "https://fya-backend.vercel.app/api/v1/auth/orders",
      serviceData
    );

    if (response.data) {
      // Send Email to user--------ing_
      router.push("/dashboard/user/appointments");
      try {
        const response = await emailjs.sendForm(
          "service_3kn5ji1",
          "template_zvkyj0s",
          form.current,
          "1leqQsJkGshzPjw2s"
        );
      } catch (error) {
        console.error("Email could not be sent:", error);
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Appointment booking success",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsOpen(false);
      reset();
    }
  };

  return (
    <div className="default-container">
      <PageTitle
        title={service_name}
        subTitle={service_description}
      ></PageTitle>
      <div>
        <div className="justify-between gap-10 lg:flex mt-8 md:mt-16">
          <figure>
            <Image
              className="rounded-lg shadow-md object-contain"
              src={service_image ? service_image : "https://i.ibb.co/4Vj2PZ4/istockphoto-512053124-170667a.webp"}
              alt={service_name || 'service'}
              width={850}
              height={340}
            />
            <figcaption className="text-sm font-thin">
              {service_name}
            </figcaption>
          </figure>
          <div>
            <h3 className="mt-6 md:mt-0 mb-2 text-4xl font-extrabold tracking-wide text-slate-950">
              {service_name}
            </h3>
            <p className="mb-12 text-xl font-semibold text-slate-600">
              {service_description}
            </p>
            <div className="px-8 py-2 bg-slate-300 rounded-md shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Price:
                </p>
                <p className="text-xl text-slate-700">{service_price}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Service Duration:
                </p>
                <p className="text-xl text-slate-700">{service_duration}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Warranty:
                </p>
                <p className="text-xl text-slate-700">{warranty}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Benefits:
                </p>
                <p className="text-xl text-slate-700">{benefits}</p>
              </div>
              <button onClick={() => setIsOpen(true)} className="primary-btn">
                Appointment Booking
              </button>
            </div>
          </div>
        </div>
        <div className="justify-around p-8 my-12 bg-slate-100 rounded-xl hover:shadow-xl hover:border hover:border-[#69d94f] md:flex">
          <h2 className="font-mono text-4xl font-bold primary-text ">
            Reviews :
          </h2>
          <div className="">
            {customer_reviews?.map((review, idx) => (
              <p className="py-2 text-xl font-medium text-slate-600" key={idx}>
                <BiMessageRounded className="mr-4 primary-text md:inline" />{" "}
                {review}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-row-reverse items-center justify-around gap-10 p-8 mb-2 md:flex bg-teal-50">
        <div>
          <figure>
            <Image
              className="rounded-xl"
              src={workshop_image}
              alt="Workshop"
              width={650}
              height={450}
            />
          </figure>
        </div>
        <div>
          <h2 className="text-xl font-semibold primary-text">
            Crafting Automotive Perfection: Your Vehicles Trusted Haven
          </h2>
          <div className="leading-4 tracking-tight text-md text-cyan-800">
            At our station, cars arent just machines; they re passions. Witness
            the transformation as we elevate each vehicles performance and
            aesthetics.
            <div className="p-4 mt-8 border border-teal-600 rounded">
              <h4 className="font-mono text-xl font-semibold text-sky-600">
                Key Points :
              </h4>
              <div className="items-center justify-around md:flex ">
                <div>
                  <p className="leading-5 tracking-wider text-md">
                    🔧 Expert Mechanics
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🚗 Complete Care Solutions
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🌟 Reputed Service History
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🔍 Detail-Oriented Approach
                  </p>
                </div>
                <div>
                  <p className="leading-5 tracking-wider text-md">
                    💎 Exquisite Finishing Touches
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🚙 Tailored Servicing Plans{" "}
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🔄 Regular Maintenance
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🏆 Trusted by Enthusiasts
                  </p>
                </div>
              </div>
              <div className="items-center justify-center mt-4 md:flex">
                <p className="leading-5 tracking-wider text-md">
                  🚀 Performance Enhancements
                </p>
              </div>
            </div>
          </div>
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
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="">
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
                    className="mt-1 primary-input"
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
                    className="mt-1 primary-input"
                    required
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    defaultValue={user?.email}
                    className="mt-1 primary-input"
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
                    className="mt-1 primary-input"
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
                    className="mt-1 primary-input"
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
                    className="mt-1 primary-input"
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
                      className="mt-1 primary-input"
                      {...register("streetAddress")}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium">
                      City
                    </label>
                    <select
                      className=" mt-1 primary-input"
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
                      className="mt-1 primary-input"
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
                      className="mt-1 primary-input"
                      {...register("postal")}
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
                      className=" mt-1 primary-input"
                      {...register("service_type")}
                      onChange={(e) => setSelectedServiceType(e.target.value)}
                    >
                      <option value="On Garage">On Garage</option>
                      <option value="On Spot">On Spot</option>
                    </select>
                  </div>
                  {selectedServiceType === "On Garage" && (
                    <div>
                      <label
                        htmlFor="workshop_email"
                        className="block text-sm font-medium"
                      >
                        Workshop Email
                      </label>
                      <select
                        className="mt-1 primary-input"
                        {...register("workshop_email")}
                      >
                        <option value="sohagsheik32@gmail.com">
                          sohagsheik32@gmail.com
                        </option>
                        <option value="fya6@gmail.com">fya6@gmail.com</option>
                      </select>
                    </div>
                  )}

                  {selectedServiceType === "On Spot" && (
                    <div>
                      <label
                        htmlFor="map"
                        className="block text-sm font-medium"
                      >
                        Latitude *
                      </label>
                      <input
                        type="text"
                        id="map"
                        name="map"
                        placeholder="your latitude location"
                        className="mt-1 primary-input"
                        {...register("user_lat")}
                      />
                    </div>
                  )}
                  {selectedServiceType === "On Spot" && (
                    <div>
                      <label
                        htmlFor="long"
                        className="block text-sm font-medium"
                      >
                        Longitude *
                      </label>
                      <input
                        type="text"
                        id="long"
                        name="long"
                        placeholder="your longitude location"
                        className="mt-1 primary-input"
                        {...register("user_lon")}
                      />
                    </div>
                  )}
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

export default ServicePage;
