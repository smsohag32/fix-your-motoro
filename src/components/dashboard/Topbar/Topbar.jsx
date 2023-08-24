"use client"
import { AiOutlineSearch, AiFillMessage} from "react-icons/ai";
import Image from "next/image";
import React, { useContext } from "react";
import AuthContext from "@/context/AuthContext";

const Topbar = () => {const { user, loading } = useContext(AuthContext);

return (  
    <div className="dashboard-topbar flex mx-12 items-center justify-between p-4 bg-gray-100 shadow-md">

    {/* Search bar in the middle */}
    <div className="search-bar flex items-center space-x-2">
    
        <h1 className="text-lg font-semibold"> 
        <span className="text-2xl primary-text ">Welcome,</span>Workshop Manager!</h1>
       
      <input
        type="text"
        placeholder="Search..."
        className="border  py-1 rounded-md focus:outline-none 
        focus: border-[#f02801]"
      />
      <button className="primary-btn text-white  px-4 py-1 rounded-md">
        <AiOutlineSearch className="text-lg " />
      </button>
    </div>
    
    {/* Message icon on the right */}
    <div className="message-icon text-2xl flex cursor-pointer">
     Message <AiFillMessage className="text-[#f02801]" />
    </div>
    
    {/* User information */}
  </div>
);
};

export default Topbar;
