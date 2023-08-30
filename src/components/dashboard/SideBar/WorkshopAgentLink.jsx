"use client";
import React from "react";
import {
  MdOutlineAnalytics,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots, BiListCheck } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link";
import NavLink from "@/components/Shared/Header/NavLink";

function WorkshopAgentLink() {
  return (
    <>
      <ul className="pb-4 my-4 border-b border-gray-100">
        {/* Profile section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <NavLink
              activeClassName={"text-[#f02801]"}
              href="/dashboard/workshop/profile"
            >
              Profile
            </NavLink>
          </h3>
        </li>

        {/* Appointment section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <BiListCheck className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <NavLink
              activeClassName={"text-[#f02801]"}
              href="/dashboard/workshop/appointments"
            >
              Appointments
            </NavLink>
          </h3>
          {/* Appointment Management: Display a list of upcoming appointments, along with details like service type, vehicle details, and customer contact information. */}
        </li>

        {/* Customer Information section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <IoIosPeople className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <NavLink
              activeClassName={"text-[#f02801]"}
              href="/dashboard/workshop/customers"
            >
              Customers
            </NavLink>
          </h3>
          {/* Customer Information: Provide access to customer profiles, service histories, and any special notes or requests from previous visits. */}
        </li>
        {/* Service section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <MdOutlineMiscellaneousServices className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <NavLink
              activeClassName={"text-[#f02801]"}
              href="/dashboard/workshop/services"
            >
              Services Queue
            </NavLink>
          </h3>
          {/* Service Queue: Show the order in which vehicles are to be serviced, helping the workshop prioritize tasks. */}
        </li>
        {/* Technicians section */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <NavLink
              activeClassName={"text-[#f02801]"}
              href="/dashboard/workshop/assignments"
            >
              Technician Task
            </NavLink>
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
      </ul>
    </>
  );
}

export default WorkshopAgentLink;
