"use client";
import { generateReceiptPDF } from "@/components/DownloadReceipt/DownLoadReceipt";
import UserFeedbackModal from "@/components/Modal/userModal/UserFeedBackModal";
import Link from "next/link";
import React, { useState } from "react";

const historyData = [
  {
    id: 1,
    serviceDate: "2023-08-31 09:00 AM",
    serviceType: "Oil Change",
    serviceProvider: "Auto Service Center 1",
    serviceDescription: "Regular oil change and filter replacement.",
    serviceStatus: "Completed",
    serviceCost: "50.00",
    servicePaymentInfo: "#1464asdf54aser",
  },
  {
    id: 2,
    serviceDate: "2023-08-31 09:00 AM",
    serviceType: "Oil Change",
    serviceProvider: "Auto Service Center 1",
    serviceDescription: "Regular oil change and filter replacement.",
    serviceStatus: "Completed",
    serviceCost: "50.00",
    servicePaymentInfo: "#1464asdf54aser",
  },
  {
    id: 3,
    serviceDate: "2023-08-31 09:00 AM",
    serviceType: "Oil Change",
    serviceProvider: "Auto Service Center 1",
    serviceDescription: "Regular oil change and filter replacement.",
    serviceStatus: "Completed",
    serviceCost: "50.00",
    servicePaymentInfo: "#1464asdf54aser",
  },
  // Add more historical service entries
];

const UserHistory = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to download a PDF receipt
  const downloadReceipt = async (service) => {
    const pdfBytes = await generateReceiptPDF(service);

    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfURL = URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = `Receipt_${service.id}.pdf`;

    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(pdfURL);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">User Service History</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {historyData.map((entry) => (
          <div
            key={entry.id}
            className="bg-white rounded-lg p-4 mb-4 transition-all duration-300 ease-in transform primary-shadow hover:scale-105"
          >
            <div className="text-lg">
              <p>
                <span className="font-semibold">Service:</span>{" "}
                {entry.serviceType}
              </p>
            </div>
            <div className="text-lg">
              <p>
                <span className="font-semibold">Date:</span> {entry.serviceDate}
              </p>
            </div>

            <div className="mt-4">
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {entry.serviceDescription}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Service Provider:</span>{" "}
                <Link href={`/workshops/${25534888}`}>
                  <span
                    className="text-blue-500 hover:underline"
                    title="Visit our workshop"
                  >
                    {entry.serviceProvider}
                  </span>
                </Link>
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-green-500">{entry.serviceStatus}</span>
              </p>
              <p>
                <span className="font-semibold">Service cost:</span> $
                {entry.serviceCost}
              </p>
              <p>
                <span className="font-semibold">TransactionID:</span>{" "}
                {entry.servicePaymentInfo}
              </p>

              {/* Add more details as needed */}
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => downloadReceipt(entry)}
                className="bg-blue-400 p-1 rounded-md outline-none hover:bg-blue-600 text-white transition duration-300"
              >
                DownLoad Receipt
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-400 p-1 rounded-md outline-none hover:bg-blue-600 text-white transition duration-300"
              >
                Rating and Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
      <UserFeedbackModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default UserHistory;
