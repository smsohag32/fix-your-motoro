import Link from "next/link";
import React from "react";

const EmptyState = ({ message, setIsOpen, address, label }) => {
  return (
    <div className="h-[60vh] gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      {setIsOpen ? (
        <button onClick={() => setIsOpen(true)} className="outline-btn">
          {label}
        </button>
      ) : (
        <Link href={address} className="outline-btn">
          {label}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
