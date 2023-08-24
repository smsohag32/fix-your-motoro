"use client";
import React from "react";
import {
    MdOutlineMiscellaneousServices, MdPayments, MdSupportAgent,
} from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { FaHistory } from "react-icons/fa";
import { BiCreditCard } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

function UserLink() {
    const { user } = useAuth();
   const { uid, displayName, photoURL } = user || {};
  return (
    <ul className="pb-4 my-4 border-b border-gray-100">
        {/* Profile section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            {/* <CgProfile className="text-2xl text-gray-600 group-hover:text-white " /> */}
            {(uid && (
          <span onClick={() => router.push("/dashboard")}>
            <Image
              src={photoURL || userLogo}
              alt=""
              width={40}
              height={40}
              className="w-8 h-8 rounded-full"
            />
          </span>
        )) || (
            <Image
              src={userLogo}
              alt=""
              width={40}
              height={40}
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          )}
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/profile">{displayName}</Link>
            </h3>
        </li>
        {/* Service section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <MdOutlineMiscellaneousServices className="w-8 h-8 text-gray-600 group-hover:text-white" />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/user_service">Service</Link>
            </h3>
        </li>
        
        {/* add to card section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <BiCreditCard className="w-8 h-8 text-gray-600 group-hover:text-white" />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/upcomming_appointment">Appointment</Link>
            </h3>
        </li>
        
        {/* Support section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <MdSupportAgent className="w-8 h-8 text-gray-600 group-hover:text-white" />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/user_history">History</Link>
            </h3>
        </li>
        
        {/* History section  */}
        
        
        {/*  Payments section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <MdPayments className="w-8 h-6 text-gray-600 group-hover:text-white " />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/user_payments"> Billing & Payments</Link>
            </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <FaHistory className="w-8 h-6 text-gray-600 group-hover:text-white " />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/user_support">FAQ & Support</Link>
            </h3>
        </li>
        {/*  My Vehicles section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <AiFillCar className="w-8 h-6 text-gray-600 group-hover:text-white " />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/user_vehicles">My Vehicles</Link>
            </h3>
        </li>

        {/*  Appointments section  */}
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
            <MdPayments className="w-8 h-6 text-gray-600 group-hover:text-white " />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                <Link href="/dashboard/user/user_profile"> Account </Link>
            </h3>
        </li>
                
    </ul>
  );
}

export default UserLink;
