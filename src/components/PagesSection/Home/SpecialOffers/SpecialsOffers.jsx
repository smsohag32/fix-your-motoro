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
    {
      title: "Special Summer Offer",
      description: "Get your car serviced this summer and beat the heat!",
      discount: 25,
      buttonText: "Book Now",
    },
  ];
  return (
    <div className="default-container mt-4 mb-12">
      <SectionTitle
        title="Special Offers"
        subTitle="We are offering discount"
      />
      <div className="grid grid-cols-1 my-12 md:grid-cols-2 gap-6">
        {offersData.map((offer, index) => (
          <div
            key={index}
            className="p-5 rounded-sm primary-shadow hover:scale-105 duration-500 flex flex-col transition-all"
          >
            <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
            <p className="text-lg">{offer.description}</p>
            <p className="mt-2 mb-5">
              Discount:
              <span className="font-bold primary-text">
                {offer.discount}%
              </span>{" "}
              off
            </p>
            <div className="mt-auto">
              <button className="primary-btn">{offer.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialsOffers;
