"use client";
import React from "react";
import {
  MdOutlineAnalytics,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAltDetail, BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";

function WorkshopAgentLink() {
  return (
    <>
      <ul className="pb-4 my-4 border-b border-gray-100">
        {/* Profile section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/workshop/profile">Workshop Profile</Link>
          </h3>
        </li>

        {/* Appointment section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/workshop/appointments">
              Appointment Management
            </Link>
          </h3>
          {/* Appointment Management: Display a list of upcoming appointments, along with details like service type, vehicle details, and customer contact information. */}
        </li>

        {/* Customer Information section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/workshop/customers">
              Customer Information
            </Link>
          </h3>
          {/* Customer Information: Provide access to customer profiles, service histories, and any special notes or requests from previous visits. */}
        </li>
        {/* Service section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <MdOutlineMiscellaneousServices className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/workshop/services">Services Queue</Link>
          </h3>
          {/* Service Queue: Show the order in which vehicles are to be serviced, helping the workshop prioritize tasks. */}
        </li>
        {/* Technicians section */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/workshop/assignments">
              Technician Assignment
            </Link>
          </h3>
          {/* Technician Assignment: Assign technicians to specific tasks based on their expertise and availability. */}
        </li>
        {/* Communication section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/workshop/communication">Communication</Link>
          </h3>
          {/* Communication: Send automated updates to customers regarding service progress, delays, or additional repairs that might be needed.   */}
        </li>
         {/* message button */}
  <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
  <BiMessageAltDetail className="w-8 h-6 group-hover:text-[#f02801]" />
  <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] "> 
                <Link href="/dashboard/workshop/message">Message</Link>
            </h3>
        </li>
      </ul>
    </>
  );
}

export default WorkshopAgentLink;
