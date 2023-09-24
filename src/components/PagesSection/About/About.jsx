import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

import "@/styles/about.modules.css";
import React from "react";

const About = () => {
  return (
    <>
      <PageTitle
        title="About Us"
        subTitle="Welcome to the Future of Car Care"
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                On-Spot Servicing
              </h3>
              <p className="text-gray-700">
                Our skilled technicians are equipped to provide on-the-spot car
                servicing wherever you are. Whether you're at home, work, or
                anywhere else, we'll ensure your car gets the attention it needs
                without disrupting your schedule.
              </p>
              <p className="mt-4 text-gray-700">
                Our mobile service units are fully equipped with the latest
                tools and equipment to handle a wide range of car maintenance
                and repair tasks. From oil changes to tire rotations, we've got
                you covered.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                On-Garage Servicing
              </h3>
              <p className="text-gray-700">
                If you prefer a more comprehensive service, you can bring your
                car to our state-of-the-art garage. Our expert mechanics will
                diagnose, repair, and maintain your vehicle using top-notch
                equipment and genuine parts.
              </p>
              <p className="mt-4 text-gray-700">
                Our garage is equipped with advanced diagnostic tools to quickly
                identify issues and provide accurate solutions. We believe in
                transparent communication, and we'll always explain the
                necessary repairs and costs before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700">
            At our motor servicing portal, our mission is to provide hassle-free
            and reliable car maintenance services. We understand that your time
            is valuable, and we're dedicated to ensuring your car is in its best
            condition while fitting into your busy schedule.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-700">
              With years of experience in the automotive industry, we've built a
              reputation for excellence in car servicing. Here's why you should
              choose us:
            </p>
            <ul className="mt-4 text-left list-disc list-inside text-gray-700">
              <li>Qualified and skilled technicians</li>
              <li>Convenient on-spot servicing options</li>
              <li>Top-notch garage facilities and equipment</li>
              <li>Transparent communication and pricing</li>
              <li>Committed to quality and customer satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <SectionTitle
              title="Visit Our Head Office"
              subTitle="Join our weekly event"
            />
            <div className="h-96 map-container">
              <iframe
                title="Head Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3757240475534!2d90.36696441471575!3d23.805234886252663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1a96f884313%3A0x35ab43a99a1eb7f0!2sFix%20Moto!5e0!3m2!1sen!2sbd!4v1692256035601!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="map-tooltip">
                <p>FYA Head Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
