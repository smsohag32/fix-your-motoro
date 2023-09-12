import Shops from "@/components/PagesSection/Shops/Shops/Shops";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React from "react";

const ShopsPage = () => {
  return (
    <div className="default-container">
      <PageTitle
        title="Search as you need"
        subTitle="We care about your journey"
      />
      <Shops />
    </div>
  );
};

export default ShopsPage;
