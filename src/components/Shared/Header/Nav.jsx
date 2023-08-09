"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
const Nav = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <nav className="flex default-container items-center justify-between">
      <div className="md:hidden">
        {isOpen ? (
          <span onClick={() => setIsOpen(false)}>
            <GrClose className="text-2xl font-bold duration-200" />
          </span>
        ) : (
          <span onClick={() => setIsOpen(true)}>
            <CiMenuFries className="text-2xl font-bold duration-200"></CiMenuFries>
          </span>
        )}
      </div>
      <span>
        <Link href="/" className="flex items-center gap-1">
          FYM
        </Link>
      </span>

      <ul
        className={`flex uppercase text-sm font-bold leading-relaxed flex-col py-8 md:py-0 md:bg-transparent duration-300 transition-all transform  md:text-black absolute md:static gap-[1.5rem] md:flex-row ${
          isOpen
            ? "top-[80px] right-0 left-0 text-center"
            : "-left-60 top-[80px] overflow-hidden duration-100"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </ul>
      <div>Login user info</div>
    </nav>
  );
};

export default Nav;
