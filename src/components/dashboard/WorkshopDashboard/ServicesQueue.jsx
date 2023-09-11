"use client";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Link from "next/link";
import useWorkshopServices from "@/hooks/useWorkshopServices";
import Image from "next/image";

const ServicesQueue = () => {
  const { workshopServices, wOLoading } = useWorkshopServices();
  console.log(workshopServices);

  if (wOLoading) {
    return <MidSpinner />;
  } else {
    return (
      <>
        <div className="mt-20  ">
          <div className="py-10 border md:flex justify-center items-center">
            <Link href="/dashboard/workshop/service_form">
              <button className="rounded-lg primary-btn">
                Post a new Service
              </button>{" "}
            </Link>
          </div>

          {workshopServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workshopServices?.map((order) => (
                <div
                  className="p-3 border-2 rounded-md shadow-lg bg-slate-100 m-1 space-y-5 "
                  key={order._id}
                >
                  <figure>
                    <Image
                      src={order.service_image}
                      alt={order.service_name}
                      width={350}
                      height={280}
                    />
                    <figcaption className="text-sm font-thin">
                      {order.service_name}
                    </figcaption>
                  </figure>
                  <div>
                    <h4 className="text-lg font-medium">
                      Service Name : {order.service_name}
                    </h4>
                    <p className="text-md text-slate-500">
                      {" "}
                      Description : {order.service_description}{" "}
                    </p>
                    <p className="text-md text-slate-500">
                      {" "}
                      Category : {order.service_category}{" "}
                    </p>
                    <p className="text-md text-slate-500">
                      {" "}
                      Service Duration : {order.service_duration}{" "}
                    </p>
                    <p className="text-md text-slate-500">
                      {" "}
                      Cost : {order.service_price}{" "}
                    </p>
                    <p className="text-md text-slate-500">
                      {" "}
                      Benefits : {order.benefits}{" "}
                    </p>
                    <p className="text-md text-slate-500">
                      {" "}
                      Warranty : {order.warranty}{" "}
                    </p>
                  </div>
                  <div className="flex md:justify-between items-center">
                    <h2> Workshop Image </h2>
                    <figure>
                      <Image
                        src={order.workshop_image}
                        alt="Workshop Picture"
                        width={80}
                        height={50}
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[40vh] flex justify-center items-center">
              <p className="text-2xl text-center font-bol primary-text px-4 py-2 bg-slate-100 border rounded-md">
                NO Services Available yet
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default ServicesQueue;
