import WorkShops from "@/components/PagesSection/WorkShops/Workshop/WorkShops";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React from "react";

const WorkshopsPage = () => {
  return (
    <div className="mt-32 mb-12 default-container">
    <PageTitle
      title="Your Roadmap"
      subTitle=" to Motor Servicing Excellence"
    />
        <WorkShops />
    </div>
  );
};

export default WorkshopsPage;
