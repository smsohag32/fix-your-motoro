"use client";

import SearchContext from "@/context/SearchContext";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { setLoading, setSearchText } = useContext(SearchContext);
  const [text, setText] = useState("");

  // handle to college search
  const handleSearch = async () => {
    setLoading(true);
    if (!(pathName === "/workshop")) {
      router.push("/workshop");
    }
    setSearchText(text);
  };

  return (
    <div className="flex-1 flex ">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full b pl-10 border border-[#379a22] focus:outline-none focus:border-[#379a22] pr-4 py-2"
          onChange={(e) => setText(e.target.value)}
          placeholder="Search workshop By location..."
        />
      </div>
      <button
        onClick={() => handleSearch()}
        className="px-3 font-semibold bg-[#379a22] text-white py-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
