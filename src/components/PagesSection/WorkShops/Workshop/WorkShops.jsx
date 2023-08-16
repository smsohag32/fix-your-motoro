import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

const WorkShops = () => {
  return (
    <div>
      <PageTitle title="Workshop" subTitle={"You are treble now!"} />
      <div className="default-container">
        <SectionTitle
          title={"Our Featured Gradge"}
          subTitle={"to be like you"}
        />
        <div></div>
      </div>
    </div>
  );
};

export default WorkShops;
