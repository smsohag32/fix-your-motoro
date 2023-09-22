'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  const [animateFooter, setAnimateFooter] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimateFooter(true);
  }, []);

  const footerStyle = {
    backgroundColor: "transparent", // Set the background color to transparent
    color: "white",
    opacity: animateFooter ? 1 : 0,
    transform: animateFooter ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  return (
    <footer style={footerStyle} className="footer-container">
      <div
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27250%27 height=%2730%27 viewBox=%270 0 1000 120%27%3E%3Crect fill=%27%23000000%27 width=%271000%27 height=%27120%27/%3E%3Cg fill=%27none%27 stroke=%27%23222%27 stroke-width=%2710%27%3E%3Cpath d=%27M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30%27/%3E%3Cpath d=%27M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30%27/%3E%3Cpath d=%27M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30%27/%3E%3Cpath d=%27M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30%27/%3E%3Cpath d=%27M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30%27/%3E%3Cpath d=%27M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30%27/%3E%3C/g%3E%3C/svg%3E')",
        }}
        className="wave"
      ></div>
      <div style={{ padding: "20px" }} className="container mx-12px flex flex-col md:flex-row placeholder: justify-between relative">
        <div className="mb-6 md:mb-0">
          <Image src={logo} alt="logo" height={150} width={150} />
          <p className="text-sm ">123 Street Road, Dhaka</p>
          <p className="text-sm">Email: info@fixyourmotornow.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-green-500">
                DashBoard
              </Link>
            </li>
            <li>
              <Link href="/workshop" className="hover:text-green-500">
                Workshops
              </Link>
            </li>
            <li>
              <Link href="/shops" className="hover:text-green-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-500">
                services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-500">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">Important Link</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/65019cda91175965f35c554e" className="hover:text-green-500">
                Car Care Tips
              </Link>
            </li>
            <li>
              <Link href="/blog/65019cda91175965f35c5550" className="hover:text-green-500">
                Importance of Brake
              </Link>
            </li>
            <li>
              <Link href="/blog/65019cda91175965f35c554f" className="hover:text-green-500">
                Oil Changing Tips
              </Link>
            </li>
            <li>
              <Link href="/blog/65019cda91175965f35c5554" className="hover:text-green-500">
                Car Suspension
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-500">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-green-500">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">Developers Profile</h2>
          <div className="flex justify-start md:justify-center space-x-4">
            <ul className="space-y-2">
              <li><Link href={"https://fix-your-motoro.vercel.app/"}>
                <div className="flex cursor-pointer  hover:text-green-300 items-center">Md. Zubaer Hossain
                  <AiOutlineLinkedin /></div>
              </Link></li>
              <li><Link href={"https://fix-your-motoro.vercel.app/"}>
                <div className="flex cursor-pointer hover:text-green-300 items-center">Bidhan Chandra Roy
                  <AiOutlineLinkedin /></div>
              </Link></li>
              <li><Link href={"https://fix-your-motoro.vercel.app/"}>
                <div className="flex cursor-pointer hover:text-green-500 items-center">Md. Sohag Sheik
                  <AiOutlineLinkedin /></div>
              </Link></li>
              <li> <Link href={"https://fix-your-motoro.vercel.app/"}>
                <div className="flex cursor-pointer hover:text-green-300 items-center">Sabbir Sarker
                  <AiOutlineLinkedin /></div>
              </Link></li>
              <li><Link href={"https://fix-your-motoro.vercel.app/"}>
                <div className="flex cursor-pointer hover:text-green-300 items-center">Tonmoy Roy
                  <AiOutlineLinkedin /></div>
              </Link></li>
              <li><Link href={"https://fix-your-motoro.vercel.app/"}>
                <div className="flex cursor-pointer hover:text-green-300 items-center">Tarek Aziz
                  <AiOutlineLinkedin /></div>
              </Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-400 text-center mt-4 md:mt-0">Follow Us</h2>
          <div className="flex justify-center space-x-4 text-3xl">
            <Link href={"https://fix-your-motoro.vercel.app/"}>
              <AiOutlineTwitter className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link href={"https://fix-your-motoro.vercel.app/"}>
              <AiFillFacebook className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link href={"https://fix-your-motoro.vercel.app/"}>
              <AiFillLinkedin className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link href={"https://fix-your-motoro.vercel.app/"}>
              <AiFillYoutube className="cursor-pointer hover:text-gray-300" />
            </Link>

          </div>
        </div>
      </div>
      <div className="text-sm text-center text-gray-400 py-6 relative">
        &copy; {new Date().getFullYear()}  All rights reserved by Fix Your Motoro Ltd.
      </div>
      <style jsx>{`
        .wave {
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 0;
          background-repeat: repeat-x;
          background-size: cover;
          animation: waveFlow 5s linear infinite;
        }

        @keyframes waveFlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;