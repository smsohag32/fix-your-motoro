"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WorkshopCard = (props) => {
  const { name, _id, image, phone, email, address, rating } =
    props.workshopsData || {};
  const router = useRouter();

  return (
    <div className="bg-white rounded shadow-md">
      <div className="duration-500 transform gap-8 border-2 w-full flex-col md:flex-row  flex md:h-40 h-auto  items-center">
        <div className="h-full w-1/2">
          <Image
            className="h-full w-full rounded-sm"
            src={image}
            alt="workshop image"
            width={120}
            height={120}
          />
        </div>
        <div className="w-full space-y-3 text-center md:text-left mb-5">
          <h1 className="text-lg font-semibold opacity-60">{name}</h1>
          <p className="">{email}</p>
          <p className="">{address}</p>
          <p className="">{phone}</p>
        </div>
        <div className="w-full flex justify-center items-center ">
          <button
            onClick={() => router.replace(`/workshop/${_id}`)}
            className="primary-btn"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
