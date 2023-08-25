import Link from "next/link";
import React from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="flex justify-between gap-10 ps-4 w-full">
      <div className="flex-1 text-xs md:text-sm flex items-center justify-end gap-9">
        <p className="text-white flex items-center">
          <span>
            <AiFillPhone />
          </span>
          +88095342563
        </p>
        <p className="text-white flex items-center gap-3">
          <span>
            <AiTwotoneMail />
          </span>
          support@netcafebd.com
        </p>
      </div>
      <div className="primary-bg h-14 flex items-center text-right justify-end">
        <Link href="/appointment">
        <button className="block h-14 text-xs md:text-lg ps-8 md:ps-16 py-2 text-center font-semibold bg-[#f02801] text-white hover:bg-[#bb3f26e7]  md:pr-10 sm:pr-4 pr-5">
          Get Appointment
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
