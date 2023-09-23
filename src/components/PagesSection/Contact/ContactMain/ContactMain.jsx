import React from "react";
import Contact from "../ContactSection/ContactSection";
import ContactFrom from "../ContactFrom/ContactFrom";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";

const ContactMain = () => {
  return (
    <div className="">
      <PageTitle title="Contact Us" subTitle="Choice our Contact" />
      <div className="grid my-8 md:grid-cols-2 gap-5">
        <Contact />
        <ContactFrom />
      </div>
    </div>
  );
};

export default ContactMain;
