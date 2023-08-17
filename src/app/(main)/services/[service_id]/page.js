import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import loadSingleService from "@/utils/data/fetchData/loadSingleService";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";

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
        <div className="lg:flex justify-between gap-10">
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
            <h3 className="text-4xl text-slate-950 font-extrabold tracking-wide mt-6 mb-2">
              {service_name}
            </h3>
            <p className="text-slate-600 text-xl font-semibold mb-12">
              {service_description}
            </p>
            <div className="bg-orange-100 px-8 py-4 rounded-md shadow-xl">
              <div className="md:flex items-center text-xl my-2">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Price{" "}
                </p>
                <p className="md:pl-10">
                  :
                  <p className="md:inline md:pl-10">
                    <span className="bg-orange-300 text-black font-bold text-2xl px-4 py-1 rounded-xl ">
                      {service_price}
                    </span>
                  </p>
                </p>
              </div>
              <div className="text-xl font-medium md:flex items-center mb-2">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Service Duration
                </p>
                <p className="primary-text md:pl-10">
                  :{" "}
                  <p className="md:inline md:pl-10 font-bold font-mono">
                    {service_duration}
                  </p>
                </p>
              </div>
              <div className="md:flex text-xl mb-2">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Warranty
                </p>
                <p className="md:pl-10">
                  :
                  <p className="md:inline md:pl-10 font-bold font-mono">
                    {warranty}
                  </p>
                </p>
              </div>
              <div className="md:flex text-xl mb-4">
                <p className="md:w-[30%] text-left font-mono font-bold text-slate-700">
                  Benefits
                </p>
                <p className="md:pl-[130px]">
                  :
                  <p className="md:inline md:pl-10 font-bold font-mono">
                    {benefits}
                  </p>
                </p>
              </div>

              <Link href={"service/booking"}>
                <button className="primary-btn">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-12 p-8 bg-slate-100 rounded-xl hover:shadow-xl hover:border hover:border-orange-600 md:flex justify-around">
          <h2 className="text-4xl font-bold font-mono primary-text ">
            Reviews :
          </h2>
          <div className="">
            {customer_reviews.map((review, idx) => (
              <p className="text-slate-600 font-medium text-xl py-2" key={idx}>
                <BiMessageRounded className="md:inline text-orange-700 mr-4" />{" "}
                {review}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="md:flex flex-row-reverse items-center justify-around gap-10 mb-2 bg-teal-50 p-8">
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
          <h2 className="primary-text text-xl font-semibold">
            Crafting Automotive Perfection: Your Vehicle's Trusted Haven
          </h2>
          <p className="text-md text-cyan-800 tracking-tight leading-4">
            At our station, cars aren't just machines; they're passions. Witness
            the transformation as we elevate each vehicle's performance and
            aesthetics.
            <div className="p-4 border border-teal-600 rounded mt-8">
              <h4 className="text-sky-600 font-mono text-xl font-semibold">
                Key Points :
              </h4>
              <div className="md:flex justify-around items-center ">
                <div>
                  <p className="text-md leading-5 tracking-wider">
                    🔧 Expert Mechanics
                  </p>
                  <p className="text-md leading-5 tracking-wider">
                    🚗 Complete Care Solutions
                  </p>
                  <p className="text-md leading-5 tracking-wider">
                    🌟 Reputed Service History
                  </p>
                  <p className="text-md leading-5 tracking-wider">
                    🔍 Detail-Oriented Approach
                  </p>
                </div>
                <div>
                  <p className="text-md leading-5 tracking-wider">
                    💎 Exquisite Finishing Touches
                  </p>
                  <p className="text-md leading-5 tracking-wider">
                    🚙 Tailored Servicing Plans{" "}
                  </p>
                  <p className="text-md leading-5 tracking-wider">
                    🔄 Regular Maintenance
                  </p>
                  <p className="text-md leading-5 tracking-wider">
                    🏆 Trusted by Enthusiasts
                  </p>
                </div>
              </div>
              <div className="md:flex justify-center items-center mt-4">
                <p className="text-md leading-5 tracking-wider">
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
