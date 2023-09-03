"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const TopBar = () => {
  const [text, setText] = useState();
  const handleSearch = () => {
    console.log("searchin");
  };
  return (
    <div className="flex justify-between w-full gap-10 ps-4">
      <div className="flex items-center justify-end flex-1 text-xs md:text-sm gap-9">
        <div className="flex-1 flex gap-5">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full b pl-10 border border-gray-300 focus:outline-none focus:border-[#69d94f] pr-4 py-2"
              onChange={(e) => setText(e.target.value)}
              placeholder="Search here..."
            />
          </div>
          <button onClick={() => handleSearch()} className="primary-btn">
            search
          </button>
        </div>
        <p className="flex items-center text-black">
          <span>
            <AiFillPhone />
          </span>
          +88095342563
        </p>
        <p className="flex items-center gap-3 text-black">
          <span>
            <AiTwotoneMail />
          </span>
          fym@gmail.com
        </p>
      </div>
      <div className="flex items-center justify-end text-right primary-bg h-14">
        <Link href="/appointment">
          <button className="block py-2 pr-5 text-xs font-semibold text-center h-14 md:text-lg ps-8 md:ps-16 top-btn md:pr-10 sm:pr-4">
            Get Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
