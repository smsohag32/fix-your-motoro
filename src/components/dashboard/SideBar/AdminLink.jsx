
"use client";
import React from "react";
import {
    MdDashboard, MdPayments, MdSupportAgent,
} from "react-icons/md";
import Link from "next/link";
import { FaHistory, FaUsers } from "react-icons/fa";
import { BiCreditCard } from "react-icons/bi";
import NavLink from "@/components/Shared/Header/NavLink";

const  AdminLInk = () => {

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
            Summary
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
            Manage Users
          </NavLink>
        </h3>
      </li>

      {/* Support section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaHistory className="w-8 h-8 text-gray-600 group-hover:text-[#f02801]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <NavLink
            exact={"/dashboard/user/user_service" == "/dashboard"}
            activeClassName={"text-[#f02801]"}
            href="/dashboard/user/user_history"
          >
            Manage Workshops
          </NavLink>
          {/* <Link href="/dashboard/user/user_history">Manage Workshops</Link> */}
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
        <FaUsers className="w-8 h-8  group-hover:text-[#f02801] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#f02801] ">
          <NavLink
            exact={"/dashboard/comuinity" == "/dashboard"}
            activeClassName={"text-[#f02801]"}
            href="/dashboard/admin/profile"
          >
            Account
          </NavLink>
        </h3>
      </li>
    </ul>
  );
}

export default AdminLInk;
