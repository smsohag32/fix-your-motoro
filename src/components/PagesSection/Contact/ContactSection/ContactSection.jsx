import React from "react";
import "@/app/globals.css";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const ContactSection = () => {
  return (
      <div className="w-2/4 p-2 mx-auto">
        <h1 className="font-semibold uppercase text-slate-500 ">
          contact us
        </h1>
        <h1 className="mt-4 text-3xl font-semibold ">Get In Touch</h1>
        <p className="mt-6 text-gray-800">Have some big idea or brand to develop and need help? Then reach out wed love to hear about your project and provide help</p>
        <div className="grid justify-center gap-8 mx-auto mt-10 md:grid-cols-3">
          <div className="mx-auto text-center">
            <FaHome className="mx-auto text-6xl text-[#f02801]" />
            <p className="text-2xl">Address:</p>
            <p className="text-center">123 Street, City</p>
          </div>

          <div className="text-center">
            <FaPhoneAlt className="mx-auto text-6xl text-[#f02801]" />
            <p className="text-2xl">Phone:</p>
            <p className="text-center">(123) 456-7890</p>
          </div>

          <div className="text-center">
            <MdOutlineMail className="mx-auto text-6xl text-[#f02801]" />
            <p className="text-2xl">Email:</p>
            <p className="text-center">info@fixyourmotornow.com</p>
          </div>
          
      </div>
      </div>
  );
};

export default ContactSection;
