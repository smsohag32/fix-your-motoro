"use client";
import React from "react";
import { MdDashboard, MdPayments, MdSupportAgent } from "react-icons/md";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { FaHistory, FaUsers } from "react-icons/fa";
import { BiCreditCard } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import NavLink from "@/components/Shared/Header/NavLink";

function UserLink() {
  const { user } = useAuth();
  const { uid, displayName, photoURL } = user || {};
  return (
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

      {/* add to card section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <BiCreditCard className="w-8 h-8  group-hover:text-[#f02801]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <NavLink
            exact={"/dashboard/user/user_service" == "/dashboard"}
            activeClassName={"text-[#f02801]"}
            href="/dashboard/user/upcomming_appointment"
          >
            Appointment
          </NavLink>
        </h3>
      </li>

      {/* Support section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaHistory className="w-8 h-8 text-gray-600 group-hover:text-[#f02801]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <Link href="/dashboard/user/user_history">History</Link>
        </h3>
      </li>

      {/*  Payments section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdPayments className="w-8 h-6 text-gray-600 group-hover:text-[#f02801] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801]">
          <Link href="/dashboard/user/user_payments"> Billing & Payments</Link>
        </h3>
      </li>

      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaUsers className="w-8 h-8  group-hover:text-[#f02801] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <NavLink
            exact={"/dashboard/comuinity" == "/dashboard"}
            activeClassName={"text-[#f02801]"}
            href="/dashboard/user/user_service"
          >
            Community
          </NavLink>
        </h3>
      </li>

      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdSupportAgent className="w-8 h-6 group-hover:text-[#f02801] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <Link href="/dashboard/user/user_support">FAQ & Support</Link>
        </h3>
      </li>
      {/*  My Vehicles section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <AiFillCar className="w-8 h-6 group-hover:text-[#f02801]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801]">
          <Link href="/dashboard/user/user_vehicles">My Vehicles</Link>
        </h3>
      </li>

      {/*  Appointments section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdPayments className="w-8 h-6 text-gray-600 group-hover:text-[#f02801] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <Link href="/dashboard/user/user_profile"> Account </Link>
        </h3>
      </li>
    </ul>
  );
}

export default UserLink;
