import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className=" default-container py-8 text-center md:text-left lg:flex lg:justify-between">
        <div className="mb-4 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Head Office</h2>
          <p className="text-sm">123 Street, City</p>
          <p className="text-sm">Email: info@fixyourmotornow.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        <div className="mb-4 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Quick Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Engine Diagnostics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Oil Changes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Brake Repairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Transmission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Electrical
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center text-xl md:justify-start space-x-4">
            <AiOutlineTwitter className="cursor-pointer" />
            <AiFillFacebook className="cursor-pointer" />
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillYoutube className="cursor-pointer" />
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">
              Subscribe to Newsletter
            </h2>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and offers.
            </p>
            <div className="flex justify-center md:justify-start items-center text-center">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-center text-white md:mx-0 rounded-l-lg py-2 px-3 focus:outline-none focus:ring focus:border-[#f02801]"
              />
              <button type="submit" className="primary-btn ms-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 default-container pb-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Your Motor Service. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
