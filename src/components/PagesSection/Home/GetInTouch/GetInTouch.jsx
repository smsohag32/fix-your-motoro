"use client";
import React from "react";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import "@/styles/about.modules.css";
import { Toaster, toast } from "react-hot-toast";

const GetInTouch = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    toast.success("message send success");
    e.target.reset();
  };

  return (
    <section className=" mb-12 pb-8 default-container">
      <div className="text-center mb-12">
        <SectionTitle
          title="Engage With Us"
          subTitle={"Empowering Your Vehicles with Quality Servicing"}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:items-center justify-center md:justify-start">
        <div className="w-full">
          <div className="h-96 map-container">
            <iframe
              title="Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3757240475534!2d90.36696441471575!3d23.805234886252663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1a96f884313%3A0x35ab43a99a1eb7f0!2sFix%20Moto!5e0!3m2!1sen!2sbd!4v1692256035601!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="map-tooltip">
              <p>FYA Head Office</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={handleMessage} className="max-w-md mx-auto">
            <div>
              <label
                for="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="name"
                  required
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#f02801] px-4 py-2 "
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#f02801] px-4 py-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  for="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  required
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#f02801] px-4 py-2"
                  name="message"
                  rows="4"
                  cols="50"
                />
              </div>
            </div>
            <button type="submit" className="primary-btn mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default GetInTouch;
