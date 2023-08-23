"use client"
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute inline-flex items-center justify-center p-2 text-gray-800 rounded-md top-4 right-4 peer hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block w-6 h-6 md:hidden"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="fixed top-0 z-20 w-1/2 h-screen p-6 duration-200 ease-out delay-150 bg-white -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition">
          <div className="flex flex-col justify-start item-center">
            <h1 className="w-full pb-4 text-base font-bold text-center text-blue-900 border-b border-gray-100 cursor-pointer">
              Virtual Dashboard
            </h1>
            <div className="pb-4 my-4 border-b border-gray-100 ">
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Dashboard
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Profile
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Comments
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Analytics
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Messages
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Integration
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className="pb-4 my-4 border-b border-gray-100 ">
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  Settings
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-white ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className="my-4 ">
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-900 group hover:shadow-lg">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href="/" className="text-base font-semibold text-gray-800 group-hover:text-white">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
