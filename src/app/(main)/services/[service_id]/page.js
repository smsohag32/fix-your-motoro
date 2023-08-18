"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Spinner from "@/components/Spinners/Spinner";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMessageRounded } from "react-icons/bi";

const ServicePage = ({ params }) => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/services/${params.service_id}`);
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setService, params]);

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
    _id,
  } = service || {};
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="mt-32 default-container">
      <PageTitle
        title={service_name}
        subTitle={service_description}
      ></PageTitle>
      <div>
        {/* Service Area */}
        <div className="justify-between gap-10 lg:flex">
          <figure>
            <Image
              className="rounded-lg shadow-md"
              src={service_image}
              alt={service_name}
              width={850}
              height={340}
            />
            <figcaption className="text-sm font-thin">
              {service_name}
            </figcaption>
          </figure>
          <div>
            <h3 className="mt-6 mb-2 text-4xl font-extrabold tracking-wide text-slate-950">
              {service_name}
            </h3>
            <p className="mb-12 text-xl font-semibold text-slate-600">
              {service_description}
            </p>
            <div className="px-8 py-4 bg-orange-100 rounded-md shadow-xl">
              <div className="items-center my-2 text-xl md:flex">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Price{" "}
                </p>
                <p className="md:pl-10">
                  :
                  <p className="md:inline md:pl-10">
                    <span className="px-4 py-1 text-2xl font-bold text-black bg-orange-300 rounded-xl ">
                      {service_price}
                    </span>
                  </p>
                </p>
              </div>
              <div className="items-center mb-2 text-xl font-medium md:flex">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Service Duration
                </p>
                <p className="primary-text md:pl-10">
                  <p className="font-mono font-bold md:inline md:pl-10">
                    {service_duration}
                  </p>
                </p>
              </div>
              <div className="mb-2 text-xl md:flex">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Warranty
                </p>
                <p className="md:pl-10">
                  :
                  <p className="font-mono font-bold md:inline md:pl-10">
                    {warranty}
                  </p>
                </p>
              </div>
              <div className="mb-4 text-xl md:flex">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Benefits
                </p>
                <p className="md:pl-[130px]">
                  :
                  <p className="font-mono font-bold md:inline md:pl-10">
                    {benefits}
                  </p>
                </p>
              </div>

              <Link href={`/services/booking/${_id}`}>
                <button className="primary-btn">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="justify-around p-8 my-12 bg-slate-100 rounded-xl hover:shadow-xl hover:border hover:border-orange-600 md:flex">
          <h2 className="font-mono text-4xl font-bold primary-text ">
            Reviews :
          </h2>
          <div className="">
            {customer_reviews?.map((review, idx) => (
              <p className="py-2 text-xl font-medium text-slate-600" key={idx}>
                <BiMessageRounded className="mr-4 text-orange-700 md:inline" />{" "}
                {review}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-row-reverse items-center justify-around gap-10 p-8 mb-2 md:flex bg-teal-50">
        {/* Workshop Area */}
        <div>
          <figure>
            <Image
              className="rounded-xl"
              src={workshop_image}
              alt="Workshop"
              width={650}
              height={450}
            />
          </figure>
        </div>
        <div>
          <h2 className="text-xl font-semibold primary-text">
            Crafting Automotive Perfection: Your Vehicles Trusted Haven
          </h2>
          <p className="leading-4 tracking-tight text-md text-cyan-800">
            At our station, cars arent just machines; they re passions. Witness
            the transformation as we elevate each vehicles performance and
            aesthetics.
            <div className="p-4 mt-8 border border-teal-600 rounded">
              <h4 className="font-mono text-xl font-semibold text-sky-600">
                Key Points :
              </h4>
              <div className="items-center justify-around md:flex ">
                <div>
                  <p className="leading-5 tracking-wider text-md">
                    🔧 Expert Mechanics
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🚗 Complete Care Solutions
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🌟 Reputed Service History
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🔍 Detail-Oriented Approach
                  </p>
                </div>
                <div>
                  <p className="leading-5 tracking-wider text-md">
                    💎 Exquisite Finishing Touches
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🚙 Tailored Servicing Plans{" "}
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🔄 Regular Maintenance
                  </p>
                  <p className="leading-5 tracking-wider text-md">
                    🏆 Trusted by Enthusiasts
                  </p>
                </div>
              </div>
              <div className="items-center justify-center mt-4 md:flex">
                <p className="leading-5 tracking-wider text-md">
                  🚀 Performance Enhancements
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
