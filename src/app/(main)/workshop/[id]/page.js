"use client"
import StarRating from "@/components/PagesSection/Home/SuccessReviews/StarRating";
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
    Location: "",
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
    alert(
      `Booking Information:\nName: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}\nPhone Number: ${formData.phoneNumber}\nVehicle Number: ${formData.vehicleModel}\nworkShopId : ${_id}`
    );
    setShowBookingForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
          <p>{products.name}</p>
          <p>Workshop Code: {products.workshopCode}</p>
          <p>Email: {products.email}</p>
          <div className="flex mr-2">
            <StarRating rating={products.rating} />
            <p className="ml-1">{products.rating}</p>
          </div>
        </div>
      </div>
      <p>{products.address}</p>
      <p className="mt-3">Workshop Details: {products.description}</p>

      {/* Booking Form */}
      {showBookingForm && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Booking Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
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
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Behical Model
                </label>
                <input
                  type="tel"
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={handleBookNow}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default WorkShopDetail;
