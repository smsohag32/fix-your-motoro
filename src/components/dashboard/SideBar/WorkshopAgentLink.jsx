"use client";
import {
  MdAccountCircle,
  MdDashboard,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { LuListChecks } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiMessageAltDetail } from "react-icons/bi";

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
            <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
              Overview
            </h3>
          </li>
        </Link>
        <Link
          className={
            pathName === "/dashboard/workshop/appointments"
              ? "primary-text"
              : ""
          }
          href={"/dashboard/workshop/appointments"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <LuListChecks className="w-8 h-8  hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold  hover:text-[#69d94f] ">
              Appointment Plan
            </h3>
          </li>
        </Link>
        <Link
          className={
            pathName === "/dashboard/workshop/customers" ? "primary-text" : ""
          }
          href={"/dashboard/workshop/customers"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <IoIosPeople className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
              Customers
            </h3>
          </li>
        </Link>
        <Link
          className={
            pathName === "/dashboard/workshop/reviews" ? "primary-text" : ""
          }
          href={"/dashboard/workshop/reviews"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <IoIosPeople className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
              Reviews
            </h3>
          </li>
        </Link>
        
        <Link
          exact={"/dashboard/workshop/services" == "/dashboard"}
          activeClassName={"primary-text"}
          href={"/dashboard/workshop/services"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <MdOutlineMiscellaneousServices className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
              Services Queue
            </h3>
          </li>
        </Link>
        <Link
          exact={"/dashboard/workshop/mechanics" == "/dashboard"}
          activeClassName={"primary-text"}
          href={"/dashboard/workshop/mechanics"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <BsTools className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
              Mechanics
            </h3>
          </li>
        </Link>
        <Link
          exact={"/dashboard/workshop/profile" == "/dashboard"}
          activeClassName={"primary-text"}
          href={"/dashboard/workshop/profile"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <MdAccountCircle className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
              Account
            </h3>
          </li>
          </Link>
           {/* message section */}

          <Link
            // exact={"/dashboard/workshop/message" == "/dashboard"}
            activeClassName={"primary-text"}
            href={"/dashboard/workshop/message"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <BiMessageAltDetail className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] "> 
              Message
           
            </h3>
        </li>
        </Link>

      </ul>
    </>
  );
}

export default WorkshopAgentLink;
