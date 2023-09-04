"use client";
import React from "react";
import {
  MdDashboard,
  MdPayments,
  MdSupportAgent,
} from "react-icons/md";
import Link from "next/link";
import { FaHistory, FaUsers } from "react-icons/fa";
import { BiCreditCard } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import NavLink from "@/components/Shared/Header/NavLink";

function UserLink() {
  return (
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

      {/* add to card section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <BiCreditCard className="w-8 h-8  group-hover:text-[#69d94f]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/user/user_service" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/user/upcomming_appointment"
          >
            Appointment
          </NavLink>
        </h3>
      </li>
      
      {/*  Payments section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdPayments className="w-8 h-8  group-hover:text-[#69d94f]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/user/user_add_to_card" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/user/user_add_to_card"
          >
            Billing & Payments
          </NavLink>
        </h3>
      </li>

      {/* History section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaHistory className="w-8 h-8  group-hover:text-[#69d94f]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/user/user_history" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/user/user_history"
          >
            History
          </NavLink>
        </h3>
      </li>


      {/* community section */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaUsers className="w-8 h-8  group-hover:text-[#69d94f] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/comuinity" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/user/user_service"
          >
            Community
          </NavLink>
        </h3>
      </li>
      {/* community section */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdSupportAgent className="w-8 h-8  group-hover:text-[#69d94f] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/user/user_support" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/user/user_support"
          >
            FAQ & Support
          </NavLink>
        </h3>
      </li>
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <AiFillCar className="w-8 h-6 group-hover:text-[#69d94f]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f]">
          <Link href="/dashboard/user/user_vehicles">My Vehicles</Link>
        </h3>
      </li>

      {/*  Appointments section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdSupportAgent className="w-8 h-8  group-hover:text-[#69d94f] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/user/user_profile" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/user/user_profile"
          >
            Account
          </NavLink>
        </h3>
      </li>
    </ul>
  );
}

export default UserLink;
