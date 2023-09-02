
"use client";
import React from "react";
import { MdDashboard} from "react-icons/md";
import { FaHistory, FaUser, FaUsers } from "react-icons/fa";
import { BiCreditCard } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import NavLink from "@/components/Shared/Header/NavLink";

const AdminLInk = () => {

  return (
    <ul className="pb-4 my-4 border-b border-gray-100">
      {/* dashboard section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <MdDashboard className="w-8 h-8  group-hover:text-[#69d94f]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard" == "/dashboard"}
            activeClassName={"primary-text"}
            href={"/dashboard"}
          >
            Summary
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
            Manage Users
          </NavLink>
        </h3>
      </li>

      {/* Support section  */}
      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaHistory className="w-8 h-8 text-gray-600 group-hover:text-[#69d94f]" />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/user/user_service" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/admin/manage_workshop"
          >
            Manage Workshops
          </NavLink>
        </h3>
      </li>

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

      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <BsFillBoxFill className="w-8 h-8  group-hover:text-[#69d94f] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/admin/complaint_box" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/admin/complaint_box"
          >
            Complaint Box
          </NavLink>
        </h3>
      </li>

      <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
        <FaUser className="w-8 h-8  group-hover:text-[#69d94f] " />
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
          <NavLink
            exact={"/dashboard/admin/admin_profile" == "/dashboard"}
            activeClassName={"primary-text"}
            href="/dashboard/admin/admin_profile"
          >
            Account
          </NavLink>
        </h3>
      </li>
    </ul>
  );
}

export default AdminLInk;
