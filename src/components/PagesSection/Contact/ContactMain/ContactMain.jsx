"use client"
import React from "react";
import Contact from "../ContactSection/ContactSection";
import ContactFrom from "../ContactFrom/ContactFrom";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactMain = () => {
  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);
  return (
    <div className="">
      <PageTitle title="Contact Us" subTitle="Choice our Contact" />
      <div data-aos="fade-up" className="grid my-8 md:grid-cols-2 gap-5">
        <Contact />
        <ContactFrom />
      </div>
    </div>
  );
};

export default ContactMain;
