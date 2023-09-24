import BestProducts from "@/components/PagesSection/Home/BestProducts/BestProducts";
import WorkShops from "@/components/PagesSection/WorkShops/Workshop/WorkShops";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

export const metadata = {
  title: "FYM | WorkShops",
  description: "FYM workshops",
};

const WorkshopsPage = () => {
  return (
    <div className="mb-12 default-container">
      <PageTitle title="Your Roadmap" subTitle=" Motor Servicing Excellence" />
      <WorkShops />
      <BestProducts>
        <SectionTitle title="Shop Our Motor Servicing Deals" />
      </BestProducts>
    </div>
  );
};

export default WorkshopsPage;
