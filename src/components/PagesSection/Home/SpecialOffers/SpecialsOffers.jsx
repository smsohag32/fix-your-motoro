import React from "react";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const SpecialsOffers = () => {
  const offersData = [
    {
      title: "Special Summer Offer",
      description: "Get your car serviced this summer and beat the heat!",
      discount: 25,
      buttonText: "Book Now",
    },
    {
      title: "Holiday Season Discount",
      description:
        "Enjoy a discount on all services during the holiday season!",
      discount: 15,
      buttonText: "Book Now",
    },
    {
      title: "Winter Car Checkup",
      description:
        "Prepare your car for winter with our exclusive winter checkup!",
      discount: 20,
      buttonText: "Book Now",
    },
  ];
  return (
    <div className="my-12 ">
      <h1 className="mb-10 text-4xl font-bold text-center">Special Offer</h1>
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md drop-shadow-lg bg-[#f5f5f5]"
            >
              <h2 className="mb-2 text-2xl font-bold">{offer.title}</h2>
              <p className="text-lg">{offer.description}</p>
              <p className="mt-2">Discount: {offer.discount}% off</p>
              <button className="px-4 py-2 mt-4 primary-btn">
                {offer.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialsOffers;
