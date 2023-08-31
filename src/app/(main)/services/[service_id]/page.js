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
        const response = await fetch(
          `https://fya-backend.vercel.app/api/v1/auth/services/${params.service_id}`
        );
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
            <div className="px-8 py-4 bg-slate-300 rounded-md shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Price:
                </p>
                <p className="text-xl text-slate-700">{service_price}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Service Duration:
                </p>
                <p className="text-xl text-slate-700">{service_duration}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Warranty:
                </p>
                <p className="text-xl text-slate-700">{warranty}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                <p className="font-mono font-bold text-slate-700 text-2xl">
                  Benefits:
                </p>
                <p className="text-xl text-slate-700">{benefits}</p>
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
