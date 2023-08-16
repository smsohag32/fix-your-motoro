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
    <div className="mt-32">
      <div>
        {/* Service Area */}
        <div>
          <figure>
            <Image
              src={service_image}
              alt={service_name}
              width={850}
              height={450}
            />
            <figcaption> {service_name} </figcaption>
          </figure>
        </div>
        <div>
          <h3> {service_name} </h3>
          <p> {service_description} </p>
          <p> {service_duration} </p>
          <p> {service_price} </p>
          <p> {benefits} </p>
          <p> {warranty} </p>
        </div>
        <div>
          {customer_reviews.map((review, idx) => (
            <p key={idx}> {review} </p>
          ))}
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
          <h2>  </h2>
        </div>
        </div>
    </div>
  );
};

export default ServicePage;
