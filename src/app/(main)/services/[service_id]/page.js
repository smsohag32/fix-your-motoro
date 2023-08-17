import loadSingleService from "@/utils/data/fetchData/loadSingleService";
import React from "react";

const ServicePage = async ({ params }) => {
  // console.log(params.service_id);
  const {} = await loadSingleService(params.service_id);
  return (
    <div className="mt-32">
      <h2>single service</h2>
    </div>
  );
};

export default ServicePage;
