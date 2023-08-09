import React from "react";

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
    <div className="my-12">
      <h1 className="text-4xl font-bold text-center mb-10">Special Offer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {offersData.map((offer, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-4 rounded-lg shadow-md"
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
  );
};

export default SpecialsOffers;
