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
    <div className="py-12">
      <div className="bg-gray-50 default-container py-12">
        <SectionTitle
          title={"Special Offer"}
          subTitle="Save your money with this offer?"
        />
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-4 rounded-lg shadow-md "
            >
              <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
              <p className="text-lg">{offer.description}</p>
              <p className="mt-2">Discount: {offer.discount}% off</p>
              <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white">
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
