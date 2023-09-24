import Services from "@/components/PagesSection/Services/Services";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React from "react";

export const metadata = {
  title: "FYM | Services",
  description: "FYM Services",
};

const ServicesPage = () => {
  return (
    <div className="mb-12 mt-2 default-container">
      <PageTitle
        title="Masterful Car Service Solutions"
        subTitle="Comprehensive Care for a Seamless Driving Experience"
      />

      <Services></Services>
    </div>
  );
};

export default ServicesPage;
