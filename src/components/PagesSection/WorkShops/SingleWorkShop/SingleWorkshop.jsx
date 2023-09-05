"use client";
import Image from "next/image";

import StarRating from "../../Home/SuccessReviews/StarRating";
import { useRouter } from "next/navigation";

const SingleWorkshop = (props) => {
  const { name, _id, image, phone, email, address, rating } =
    props.workshopsData;
  const router = useRouter();
  // console.log(props)

  return (
    <div className="" onClick={() => router.push(`/workshop/${_id}`)}>
      <div className="p-3 flex flex-col cursor-pointer ">
        <div className="relative mt-5 h-40">
          <Image
            className="object-cover w-full h-full transition-transform duration-500"
            src={image}
            alt={name}
            width={384}
            height={288}
          />
          <div className="absolute text-white rounded-md top-4 left-5 primary-bg shadow-emerald-50">
            <p className="px-3 py-2">{address}</p>
          </div>
        </div>
        <div className="mt-auto flex flex-col">
          <p className="mb-2 text-xl font-semibold">{name}</p>
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
