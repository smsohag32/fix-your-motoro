import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="shadow-md flex h-14 items-center fixed top-0 left-0 right-0 z-50 py-2 bg-white">
      <Nav />
    </div>
  );
};

export default Header;
