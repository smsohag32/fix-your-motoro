"use client";
import {
  MdAccountCircle,
  MdDashboard,
  MdOutlineAnalytics,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { LuListChecks } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import NavLink from "@/components/Shared/Header/NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

function WorkshopAgentLink() {
  const pathName = usePathname();
  return (
    <>
      <ul className="pb-4 my-4 border-b border-gray-100">
        <Link
          className={pathName === "/dashboard" ? "primary-text" : ""}
          href={"/dashboard"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <MdDashboard className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
              Overview
            </h3>
          </li>
        </Link>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <LuListChecks className="w-8 h-8  hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 hover:text-[#69d94f] ">
            <Link
              className={
                pathName === "/dashboard/workshop/appointments"
                  ? "primary-text"
                  : ""
              }
              href={"/dashboard/workshop/appointments"}
            >
              Appointment Plan
            </Link>
          </h3>
        </li>
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <IoIosPeople className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              className={
                pathName === "/dashboard/workshop/customers"
                  ? "primary-text"
                  : ""
              }
              href={"/dashboard/workshop/customers"}
            >
              Customer
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
          <MdOutlineAnalytics className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/assignments" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/assignments"}
            >
              Technician Task
            </NavLink>
          </h3>
        </li>

        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <BiMessageSquareDots className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] ">
            <NavLink
              exact={"/dashboard/workshop/communication" == "/dashboard"}
              activeClassName={"primary-text"}
              href={"/dashboard/workshop/communication"}
            >
              Communication
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
