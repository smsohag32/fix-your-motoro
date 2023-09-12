import Services from "@/components/PagesSection/Services/Services";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="mb-12 default-container">
      <PageTitle
        title="Masterful Car Service Solutions"
        subTitle="Comprehensive Care for a Seamless Driving Experience"
      />

      <Services></Services>
    </div>
  );
};

export default ServicesPage;
