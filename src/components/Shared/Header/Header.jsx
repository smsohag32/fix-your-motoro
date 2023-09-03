import React from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="h-12 w-full flex bg-gray-100 items-center duration-500 transition-all">
        <TopBar />
      </div>
      <div className="shadow-lg bg-black flex h-16 text-white items-center sticky left-0 right-0 top-0 z-50 py-2 duration-500">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
