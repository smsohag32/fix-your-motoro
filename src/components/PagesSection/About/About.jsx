/* eslint-disable react/no-unescaped-entities */
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <PageTitle
        title="About Us"
        subTitle="Welcome to the Future of Car Care"
      />
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-700">
          At Fix Your Motoro, we're not just fixing cars; we're shaping the
          future of automotive care. Our mission is to redefine car servicing by
          combining cutting-edge technology with exceptional craftsmanship.
        </p>
        <p className="mt-4 text-gray-700">
          Our facility is a showcase of innovation, featuring AI-powered
          diagnostics and robotic assistance. We leverage data analytics to
          predict maintenance needs, ensuring your vehicle performs at its peak
          efficiency.
        </p>
        <p className="mt-4 text-gray-700">
          The era of waiting is over. Our automated service process lets you
          track repairs in real-time, while our electric vehicle charging
          stations ensure that your eco-friendly ride stays charged and ready
          for the road ahead.
        </p>
        <p className="mt-4 text-gray-700">
          We're committed to environmental sustainability too. Our green
          initiatives include recycling and responsible disposal practices,
          reflecting our dedication to a cleaner, greener future.
        </p>
        <p className="mt-4 text-gray-700">
          Embrace the future with us. Join Fix Your Motoro for a revolution in
          car care that reimagines how technology and automobiles converge.
        </p>
      </div>
    </div>
  );
};

export default About;
