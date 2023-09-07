"use client";
import React from "react";
import {
  MdAccountCircle,
  MdDashboard,
  MdOutlineAnalytics,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { LuListChecks } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import NavLink from "@/components/Shared/Header/NavLink";

function WorkshopAgentLink() {
  return (
    <>
      <ul className="pb-4 my-4 border-b border-gray-100">
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdDashboard className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard"}
            >
              Overview
            </NavLink>
          </h3>
        </li>

        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <LuListChecks className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/appointments" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/appointments"}
            >
              Appointment Plan
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <IoIosPeople className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/reviews" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/reviews"}
            >
              Reviews
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdOutlineMiscellaneousServices className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/services" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/services"}
            >
              Services Queue
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <BsTools className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/mechanics" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/mechanics"}
            >
              Mechanics
            </NavLink>
          </h3>
        </li>

        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdAccountCircle className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/profile" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/profile"}
            >
              Account
            </NavLink>
          </h3>
        </li>
      </ul>
    </>
  );
}

export default WorkshopAgentLink;
