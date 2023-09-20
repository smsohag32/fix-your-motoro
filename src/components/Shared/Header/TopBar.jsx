'use client'
import Link from "next/link";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import SearchBar from "./SearchBar";
import "@/styles/theme-button.modules.css"
import { useTheme } from "@/context/ThemeContext";

const TopBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
 <div className="hidden md:flex default-container  justify-between w-full gap-10 ps-4">
        <button className="modern-button" onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
      <div className="flex py-3 md:py-0 flex-col md:flex-row items-center justify-end flex-1 text-xs md:text-sm gap-2 md:gap-9">
        <SearchBar />
        <p className="flex items-center ">
          <span>
            <AiFillPhone />
          </span>
          +88095342563
        </p>
        <p className="flex items-center gap-3 ">
          <span>
            <AiTwotoneMail />
          </span>
          fym@gmail.com
        </p>
      </div>
      <div className="flex items-center justify-end text-right primary-bg h-14">
        <Link href="/appointment">
          <button className="block py-2 pr-5 text-xs font-semibold text-center h-14 md:text-lg ps-8 md:ps-16 top-btn md:pr-10 sm:pr-4">
            Get Appointment
          </button>
        </Link>
      </div>
    </div>
  
   
  );
};

export default TopBar;
