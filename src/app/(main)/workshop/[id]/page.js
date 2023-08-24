"use client"
import StarRating from "@/components/PagesSection/Home/SuccessReviews/StarRating";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WorkShopDetail = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const _id = params.id;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    vehicleModel: "",
    workShopId: _id
    // Add more fields as needed
  });

  

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/workshops/${_id}`
        );
        const data = await response.json();
        setProducts(data);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const infoData = {
      name: formData.name,
      email: formData.email,
      location: formData.location,
      phoneNumber: formData.phoneNumber,
      vehicleNumber: formData.vehicleNumber,
      workShopId: _id,
    };
    alert(
      `Booking Information:\nName: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}\nPhone Number: ${formData.phoneNumber}\nVehicle Number: ${formData.vehicleNumber}\nworkShopId : ${_id}`
    );
    console.log(infoData);
    // setShowBookingForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   if (loading) {
     return <MidSpinner />; 
   }

  return (
    <div className="relative mt-36 p-5">
      <div className="flex gap-5">
        <Image
          className="object-cover transition-transform duration-500"
          src={products.image}
          alt={products.name}
          width={384}
          height={288}
        />
        <div>
          <p className="text-2xl mb-2">{products.name}</p>
          <p className="mb-2">Workshop Code: {products.workshopCode}</p>
          <p className="mb-2">Email: {products.email}</p>
          <div className="flex mr-2">
            <StarRating rating={products.rating} />
            <p className="ml-1">{products.rating}</p>
          </div>
        </div>
      </div>
      <p>Location: {products.address}</p>
      <p className="my-3  text-slate-500">Workshop Details: {products.description}</p>

      {/* Booking Form */}
      {showBookingForm && (
        <div className="absolute top-5 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-75">
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Booking Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4 ">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold"
                >
                  Vehicle Number
                </label>
                <input
                  type="tel"
                  id="vehicleNumber"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="primary-btn font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
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
      <button
        onClick={handleBookNow}
        className=" primary-btn  text-white font-bold py-2 px-4 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default WorkShopDetail;
