import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import loadSingleService from "@/utils/data/fetchData/loadSingleService";
import Image from "next/image";
import React from "react";

const ServicePage = async ({ params }) => {
  // console.log(params.service_id);
  const {
    service_name,
    service_image,
    service_description,
    service_price,
    workshop_image,
    benefits,
    service_duration,
    customer_reviews,
    warranty,
  } = await loadSingleService(params.service_id);
  return (
    <div className="mt-32 default-container">
      <PageTitle
        title={service_name}
        subTitle={service_description}
      ></PageTitle>
      <div>
        {/* Service Area */}
        <div className="lg:flex justify-content items-center gap-10">
          <figure>
            <Image
              src={service_image}
              alt={service_name}
              width={550}
              height={350}
            />
            <figcaption className="text-sm font-thin">
              {service_name}
            </figcaption>
          </figure>
          <div>
            <h3 className="text-2xl text-slate-950 font-semibold tracking-wide">
              {service_name}
            </h3>
            <p className="text-slate-600 text-xl font-medium">
              {service_description}
            </p>
            <p className="text-lg font-medium primary-text">
              {service_duration}
            </p>
            <p className="text-slate-600 font-lg tracking-wide">
              {" "}
              {service_price}{" "}
            </p>
            <p className="text-slate-600 font-lg tracking-wide"> {benefits} </p>
            <p className="text-slate-600 font-lg tracking-wide"> {warranty} </p>
            <div>
              {customer_reviews.map((review, idx) => (
                <p key={idx}> {review} </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Workshop Area */}
        <div>
          <figure>
            <Image
              src={workshop_image}
              alt="Workshop"
              width={850}
              height={450}
            />
          </figure>
        </div>
        <div>
          <h2> </h2>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
