import Link from "next/link";
import React from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="flex justify-between w-full gap-10 ps-4">
      <div className="flex items-center justify-end flex-1 text-xs md:text-sm gap-9">
        <p className="flex items-center text-white">
          <span>
            <AiFillPhone />
          </span>
          +88095342563
        </p>
        <p className="flex items-center gap-3 text-white">
          <span>
            <AiTwotoneMail />
          </span>
        fym@gmail.com
        </p>
      </div>
      <div className="flex items-center justify-end text-right primary-bg h-14">
        <Link href="/appointment">
        <button className="block py-2 pr-5 text-xs font-semibold text-center h-14 md:text-lg ps-8 md:ps-16 primary-btn md:pr-10 sm:pr-4">
          Get Appointment
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
