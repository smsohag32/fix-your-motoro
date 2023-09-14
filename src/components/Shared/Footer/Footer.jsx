import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/website-logo.png"
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="py-8 text-center  default-container md:text-left lg:flex lg:justify-between">
        <div className="mb-4 lg:w-1/3">
          <Image src={logo} alt="logo" height={120} width={120} />
          <p className="text-sm">123 Street, City</p>
          <p className="text-sm">Email: info@fixyourmotornow.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div className="mb-4 lg:w-1/3">
          <h2 className="mb-4 text-2xl font-semibold">Quick Services</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Engine Diagnostics
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Oil Changes
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Brake Repairs
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Transmission
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Electrical
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h2 className="mb-2 text-2xl font-semibold">Follow Us</h2>
          <div className="flex justify-center space-x-4 text-xl md:justify-start">
            <Link href={"https://fix-your-motoro.vercel.app/"}><AiOutlineTwitter className="cursor-pointer" /></Link>
            <Link href={"https://fix-your-motoro.vercel.app/"}><AiFillFacebook className="cursor-pointer" /></Link>
            <Link href={"https://fix-your-motoro.vercel.app/"}><AiFillLinkedin className="cursor-pointer" /></Link>
            <Link href={"https://fix-your-motoro.vercel.app/"}><AiFillYoutube className="cursor-pointer" /></Link>
          </div>
          {/* <div className="mt-4">
            <h2 className="mb-2 text-2xl font-semibold">
              Subscribe to Newsletter
            </h2>
            <p className="mb-4 text-gray-400">
              Stay updated with the latest news and offers.
            </p>
            <div className="flex items-center justify-center text-center md:justify-start">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-center text-white md:mx-0 rounded-l-lg py-2 px-3 focus:outline-none focus:ring focus:border-[#69d94f]"
              />
              <button type="submit" className="primary-btn ms-3">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="pb-10 mt-6 text-sm text-center text-gray-400 default-container">
        &copy; {new Date().getFullYear()} Your Motor Service. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
