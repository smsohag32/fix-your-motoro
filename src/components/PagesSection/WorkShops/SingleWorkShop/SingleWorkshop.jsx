"use client";
import Image from "next/image";

import StarRating from "../../Home/SuccessReviews/StarRating";
import { useRouter } from "next/navigation";

const SingleWorkshop = (props) => {
  const { name, _id, image, phone, email, location, rating } =
    props.workshopsData;
  const router = useRouter();
  // console.log(props)

  return (
    <div
      className="border border-green-200"
      onClick={() => router.push(`/workshops/${_id}`)}
    >
      <div className="p-3 hover:border duration-300 transition-all hover:border-green-200 flex flex-col h-80 cursor-pointer ">
        <div className="relative mt-5 h-40">
          <Image
            className="object-cover w-full h-full transition-transform duration-500"
            src={image}
            alt={name}
            width={384}
            height={288}
          />
          <div className="absolute text-white rounded-md top-4 left-5 primary-bg shadow-emerald-50">
            <p className="px-3 py-2">{location}</p>
          </div>
        </div>
        <p className="mt-2 ps-1 text-xl font-semibold">{name}</p>
        <div className="mt-auto flex flex-col">
          <p>{email}</p>
          <div className="flex mr-2 mt-auto">
            <StarRating rating={rating} />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkshop;
