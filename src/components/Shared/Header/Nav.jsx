"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import navLinkData from "@/utils/data/navLinkData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logoFix.jpeg";
import userLogo from "@/assets/userlogo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState();
  const router = useRouter();
  return (
    <nav className="flex default-container items-center justify-between">
      <div className="md:hidden">
        {isOpen ? (
          <span onClick={() => setIsOpen(false)}>
            <GrClose className="text-2xl font-bold cursor-pointer duration-200" />
          </span>
        ) : (
          <span onClick={() => setIsOpen(true)}>
            <CiMenuFries className="text-2xl cursor-pointer font-bold duration-200"></CiMenuFries>
          </span>
        )}
      </div>
      <span className="text-white">
        <Link href="/" className="flex items-center gap-1">
          <span className="">
            <Image src={logo} alt="" width={159} height={60} />
          </span>
        </Link>
      </span>

      <ul
        className={`flex uppercase text-sm font-bold leading-relaxed flex-col py-8 md:py-0 md:bg-transparent duration-300 ps-10 md:px-0 transition-all transform  md:text-black absolute md:static gap-[1.5rem] md:border-none md:flex-row ${
          isOpen
            ? "top-[80px] right-0 border-t-2 left-0 mx-auto w-full bg-white z-30"
            : "-left-60 top-[80px] overflow-hidden duration-100"
        }`}
      >
        {navLinkData.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <span
                className={`text-black hover:text-[#f02801] ${
                  router.pathname === link.path ? "primary-text" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        <Image src={userLogo} alt="" width={40} height={40} />
        <Link className="font-bold cursor-pointer" href="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
