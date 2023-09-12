"use client";
import { MdDashboard } from "react-icons/md";
import { FaHistory, FaUser, FaUsers } from "react-icons/fa";
import { BiCreditCard, BiMessageAltDetail } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminLInk = () => {
  const pathName = usePathname();

  return (
    <ul className="pb-4 my-4 border-b border-gray-100">
      <Link
        className={pathName === "/dashboard" ? "primary-text" : ""}
        href={"/dashboard"}
      >
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <MdDashboard className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
            Summary
          </h3>
        </li>
      </Link>
      <Link
        className={
          pathName === "/dashboard/admin/manage_user" ? "primary-text" : ""
        }
        href={"/dashboard/admin/manage_user"}
      >
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <FaUsers className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
            Manage Users
          </h3>
        </li>
      </Link>
      <Link
        className={
          pathName === "/dashboard/admin/manage_workshop" ? "primary-text" : ""
        }
        href={"/dashboard/admin/manage_workshop"}
      >
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <BiCreditCard className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
            Manage Workshops
          </h3>
        </li>
      </Link>

      <Link
        className={
          pathName === "/dashboard/admin/complaint_box" ? "primary-text" : ""
        }
        href={"/dashboard/admin/complaint_box"}
      >
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <BsFillBoxFill className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
            Complaint Box
          </h3>
        </li>
      </Link>
      {/* message section */}

      <Link
            
            activeClassName={"primary-text"}
            href={"/dashboard/admin/admin_chat"}
        >
          <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
            <BiMessageAltDetail className="w-8 h-8  group-hover:text-[#69d94f]" />
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#69d94f] "> 
              Message
           
            </h3>
        </li>
        </Link>
      <Link
        className={
          pathName === "/dashboard/admin/profile" ? "primary-text" : ""
        }
        href={"/dashboard/admin/profile"}
      >
        <li className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-gray-200 group hover:shadow-lg">
          <FaUser className="w-8 h-8  group-hover:text-[#69d94f]" />
          <h3 className="text-base font-semibold  group-hover:text-[#69d94f] ">
            Account
          </h3>
        </li>
      </Link>
    </ul>
  );
};

export default AdminLInk;
