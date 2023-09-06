"use client";
import useSingleExpert from "@/hooks/useSingleExpert";
import Spinner from "@/components/Spinners/Spinner";
import Image from "next/image";

const SingleExpert = ({ params }) => {
  const id = params._id;
  const { expert, eOLoading } = useSingleExpert(id);
  console.log(expert);

  if (eOLoading) {
    return <Spinner />;
  }
  return (
    <div className="mt-32 default-container">
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-semibold text-white">{expert.name}</h1>
            <p className="text-lg text-white">{expert.specialty}</p>
          </div>
        </header>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <Image
                src={expert.img}
                alt={expert.name}
                className="w-full rounded-lg"
                width={500}
                height={400}
              />
            </div>
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">{expert.name}</h2>
                <p className="text-gray-600">{expert.location}</p>
                <p className="text-gray-600">Experience: {expert.experience}</p>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">About Me</h3>
                  <p className="mt-2 text-gray-700">{expert.about}</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="mt-2">
                    <span className="text-gray-600">Email: </span>
                    <a
                      href={`mailto:${expert.email}`}
                      className="text-blue-500"
                    >
                      {expert.email}
                    </a>
                  </p>
                  <p className="mt-2">
                    <span className="text-gray-600">Workshop Email: </span>
                    <a
                      href={`mailto:${expert.workshop_email}`}
                      className="text-blue-500"
                    >
                      {expert.workshop_email}
                    </a>
                  </p>
                  <p className="mt-2">
                    <span className="text-gray-600">Phone: </span>
                    <a href={`tel:${expert.phone}`} className="text-blue-500">
                      {expert.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExpert;
