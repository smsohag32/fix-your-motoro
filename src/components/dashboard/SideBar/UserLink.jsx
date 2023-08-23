"use client";
import React from "react";
import {
  MdOutlineAnalytics,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";

function UserLink() {
  return (
    <>
      <ul className="pb-4 my-4 border-b border-gray-100">
        {/* Profile section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/profile">User Profile</Link>
          </h3>
        </li>
        {/* Service section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <MdOutlineMiscellaneousServices className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/service">Service</Link>
          </h3>
        </li>
        {/* Technicians section */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/technicians">Technicians</Link>
          </h3>
        </li>
        {/* payment section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
          <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
            <Link href="/dashboard/payment">Payment</Link>
          </h3>
        </li>
      </ul>
    </>
  );
}

export default UserLink;
