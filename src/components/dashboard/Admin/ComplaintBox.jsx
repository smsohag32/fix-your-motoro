"use client";
import { useEffect, useState } from "react";
import ComplaintCard from "./ComplainCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ComplaintBox = () => {
  const [complaints, setComplaint] = useState([]);
  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);

  useEffect(() => {
    fetch("/data/complaint.json")
      .then((res) => res.json())
      .then((data) => setComplaint(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div data-aos="fade-up" className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Customer Complaints
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complaints.map((complaint, index) => (
            <ComplaintCard key={index} complaint={complaint} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintBox;
