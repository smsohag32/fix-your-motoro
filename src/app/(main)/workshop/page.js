import BestProducts from "@/components/PagesSection/Home/BestProducts/BestProducts";
import WorkShops from "@/components/PagesSection/WorkShops/Workshop/WorkShops";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

const WorkshopsPage = () => {
  return (
    <div className="mt-32 mb-12 default-container">
      <PageTitle title="Your Roadmap" subTitle=" Motor Servicing Excellence" />
      <WorkShops />
      <BestProducts>
        <SectionTitle title="Shop Our Motor Servicing Deals" />
      </BestProducts>
    </div>
  );
};

export default WorkshopsPage;
