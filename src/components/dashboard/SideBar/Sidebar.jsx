"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineAnalytics,
  MdOutlineLogout,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import TechnicianLink from "./TechnicianLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      {/* Technician side nav */}
      <div className="bg-red-400">
        <Disclosure as="nav">
          <Disclosure.Button className="absolute inline-flex items-center justify-center p-2 text-gray-800 rounded-md top-4 right-4 peer hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu
              className="block w-6 h-6 md:hidden"
              aria-hidden="true"
            />
          </Disclosure.Button>
          <div className="fixed top-0 z-20 w-1/2 h-screen p-6 duration-200 ease-out delay-150 bg-white -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition">
            <div className="flex flex-col justify-start item-center">
              {/* logo  */}
              {/* <h1 className="w-full pb-4 text-base font-bold text-center text-blue-900 cursor-pointer">
                Virtual Dashboard
              </h1> */}
              <Image
                className="w-full pb-4 text-base font-bold text-center text-blue-900 cursor-pointer"
                src="https://i.ibb.co/Tm3vXhj/logoFix.jpg"
                alt="logo"
                width="350"
                height="300"
              />
              {/* name Dynamic */}
              <h1 className="w-full pb-4 text-base font-bold text-center text-blue-900 border-b border-gray-100 cursor-pointer">
                Technicians
              </h1>

              <TechnicianLink />
              {/* {
              technician & <TechnicianLink></TechnicianLink>
            } */}

              {/* logout btn */}
              <div className="">
                <div className="my-4 ">
                  <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 border border-gray-200 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg">
                    <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 fnt-semibold group-hover:text-white">
                      <Link href="/">Logout</Link>
                    </h3>
                  </div>
                </div>
                {/* home btn */}
                <div className="my-4 ">
                  <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 border border-gray-200 rounded-md cursor-pointer hover:bg-orange-600 group hover:shadow-lg ">
                    <FaHome className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 fnt-semibold group-hover:text-white">
                      <Link href="/">Home</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
    </div>
  );
};

export default Sidebar;
