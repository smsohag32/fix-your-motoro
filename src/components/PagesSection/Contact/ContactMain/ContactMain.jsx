import React from "react";
import Contact from "../ContactSection/ContactSection";
import ContactFrom from "../ContactFrom/ContactFrom";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";

const ContactMain = () => {
  return (
    <div className="py-4">
        <PageTitle
            title="Contact Us"
            subTitle="Choice our collections of services"
        />
      <div className="grid md:grid-cols-2 ">
        <Contact />
        <ContactFrom />
      </div>
    </div>
  );
};

export default ContactMain;
