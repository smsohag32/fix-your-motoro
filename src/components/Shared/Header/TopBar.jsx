import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between gap-10 ps-4 w-full">
      <div className="flex-1 text-xs md:text-sm flex items-center justify-end gap-9">
        <p className="text-white">Hotline: +88095342563</p>
        <p className="text-white">Email: fym@gmail.com</p>
      </div>
      <div className="primary-bg h-14 flex items-center text-right justify-end">
        <button className="block h-14 text-xs md:text-lg ps-8 md:ps-16 py-2 text-center font-semibold bg-[#f02801] text-white hover:bg-[#bb3f26e7]  md:pr-10 sm:pr-4 pr-5">
          Get Appointment
        </button>
      </div>
    </div>
  );
};

export default TopBar;
