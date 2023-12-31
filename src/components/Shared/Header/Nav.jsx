"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import navLinkData from "@/utils/data/navLinkData";
import Image from "next/image";
import userLogo from "@/assets/userlogo.png";
import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import useCartProducts from "@/hooks/useCartProducts";
import logo from "@/assets/logo.png";


const Nav = () => {
  const { cartProducts, cartLoading } = useCartProducts();
  const [isOpen, setIsOpen] = useState();
  const router = useRouter();
  const { user, logout, loading } = useAuth();
  const { uid, displayName } = user || {};
  const pathName = usePathname();
  const handleLogOut = async () => {
    await logout();
    router.push("/");
  };
  
  return (
    <nav className="flex items-center justify-between default-container">
      <div className="md:hidden">
        {isOpen ? (
          <span onClick={() => setIsOpen(false)}>
            <MdClose className="text-2xl text-white font-bold duration-200 cursor-pointer" />
          </span>
        ) : (
          <span onClick={() => setIsOpen(true)}>
            <CiMenuFries className="text-2xl font-bold text-white duration-200 cursor-pointer"></CiMenuFries>
          </span>
        )}
      </div>
      <span className="text-white">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
      </span>

      <ul
        className={`flex uppercase text-sm font-bold leading-relaxed flex-col py-8 md:py-0 md:bg-transparent duration-300 ps-10 md:px-0 transition-all transform text-white absolute md:static gap-[1.5rem] md:border-none md:flex-row ${isOpen
          ? "top-[64px] right-0 border-t-2 left-0 mx-auto w-full bg-black text-white z-30"
          : "-left-60 top-[64px] overflow-hidden duration-100"
          }`}
      >
        {navLinkData.map((link, index) => (
          <li key={index}>
            <Link
              className={
                pathName === link?.path ? "primary-text" : "text-white"
              }
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
      {user && (
                <Link href="/dashboard/user/user_add_to_card" className="relative cursor-pointer">
                  <FaShoppingCart size={26} />
                  <p className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-4 rounded-full flex items-center justify-center p-2">
                    {!cartLoading ? cartProducts.length : 0}
                  </p>
                </Link>
              )}

        <div className="flex items-center gap-5">
          {loading ? (
            <Image
              src={userLogo}
              alt="user logo"
              width={40}
              height={40}
              className="cursor-pointer w-10 h-10 p-1 rounded-full ring-2 ring-[#69d94f] animate-spin"
            />
          ) : (
            <>
              {uid ? (
                <Link href="/dashboard">
                  <Image
                    src={user?.photoURL || userLogo}
                    alt="user"
                    width={40}
                    height={40}
                    title={displayName}
                    className="cursor-pointer w-10 h-10 p-1 rounded-full ring-2 ring-[#69d94f]"
                  />
                </Link>
              ) : (
                <Image
                  src={userLogo}
                  alt="user logo"
                  width={40}
                  height={40}
                  className="cursor-pointer w-10 h-10 p-1 rounded-full ring-2 ring-[#69d94f]"
                />
              )}
            </>
          )}
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="w-10 font-bold text-center cursor-pointer mr-3"
              >
                {loading ? "" : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                className="w-10 font-bold text-center cursor-pointer mr-3"
                href="/login"
              >
                {loading ? "" : "Login"}
              </Link>
            </>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Nav;
