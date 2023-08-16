"use client";
import React from "react";
import "@/app/globals.css";

const ContactFrom = () => {
  return (
     <div className="min-h-full px-2 py-4 mx-4 rounded-lg shadow-lg md:w-2/4 lg:px-8 shadow-black">
        <form>
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-5 placeholder:text-gray-400 "
              />
            </div>
          </div>

          <div>
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-5 placeholder:text-gray-400 "
              />
            </div>
          </div>

          <div>
            <label
              for="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                name="number"
                type="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-5 placeholder:text-gray-400 "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message 
              </label>
            </div>
            <div className="mt-2">
              <textarea
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-5 placeholder:text-gray-400 "
                name="w3review"
                rows="4"
                cols="50"
              />
            </div>
          </div>

          <input type="submit" className="w-full primary-btn" />
        </form>
      </div>
   
  );
};

export default ContactFrom;
