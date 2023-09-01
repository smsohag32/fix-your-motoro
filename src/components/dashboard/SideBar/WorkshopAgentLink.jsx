"use client";
import React from "react";
import {
  MdAccountCircle,
  MdDashboard,
  MdOutlineAnalytics,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageAltDetail, BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";

import { LuListChecks } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";

import NavLink from "@/components/Shared/Header/NavLink";

function WorkshopAgentLink() {
  return (
    <>
      <ul className="pb-4 my-4 border-b border-gray-100">
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdDashboard className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
              href={"/dashboard"}
            >
              Overview
            </NavLink>
          </h3>
        </li>

        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <LuListChecks className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard/workshop/appointments" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
              href={"/dashboard/workshop/appointments"}
            >
              Appointment Plan
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <IoIosPeople className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard/workshop/customers" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
              href={"/dashboard/workshop/customers"}
            >
              Customer
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdOutlineMiscellaneousServices className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard/workshop/services" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
              href={"/dashboard/workshop/services"}
            >
              Services Queue
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdOutlineAnalytics className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard/workshop/assignments" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
              href={"/dashboard/workshop/assignments"}
            >
              Technician Task
            </NavLink>
          </h3>
        </li>

        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <BiMessageSquareDots className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard/workshop/communication" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
              href={"/dashboard/workshop/communication"}
            >
              Communication
            </NavLink>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdAccountCircle className="w-8 h-8  group-hover:text-[#f02801]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
            <NavLink
              exact={"/dashboard/workshop/profile" == "/dashboard"}
              activeClassName={"text-[#f02801]"}
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
