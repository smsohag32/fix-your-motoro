"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import navLinkData from "@/utils/data/navLinkData";
import Image from "next/image";
import logo from "@/assets/logoFix.jpeg";
import userLogo from "@/assets/userlogo.png";
import NavLink from "./NavLink";
import useAuth from "@/hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const [isOpen, setIsOpen] = useState();
  return (
    <nav className="flex items-center justify-between default-container">
      <div className="md:hidden">
        {isOpen ? (
          <span onClick={() => setIsOpen(false)}>
            <GrClose className="text-2xl font-bold duration-200 cursor-pointer" />
          </span>
        ) : (
          <span onClick={() => setIsOpen(true)}>
            <CiMenuFries className="text-2xl font-bold duration-200 cursor-pointer"></CiMenuFries>
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
            ? "top-[64px] right-0 border-t-2 left-0 mx-auto w-full bg-white z-30"
            : "-left-60 top-[64px] overflow-hidden duration-100"
        }`}
      >
        {navLinkData.map((link, index) => (
          <li key={index}>
            <NavLink
              exact={link.path == "/"}
              activeClassName={"text-[#f02801]"}
              href={link.path}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        {/* <Image
          src={userLogo}
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        /> */}
        {user?.photoURL ? (
          <img
            className="w-[35px] h-[35px] rounded-full"
            src={user.photoURL}
            title={user.displayName}
            alt=""
          />
        ) : (
          <>
            <Image
              src={userLogo}
              alt=""
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </>
        )}
        {/* <Link className="font-bold cursor-pointer" href="/login">
          Login
        </Link> */}
        {user ? (
          <>
            <button onClick={handleLogOut} className="font-bold cursor-pointer">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link className="font-bold cursor-pointe" href="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
