
"use client"
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useContext, useState } from "react";
import SearchContext from "@/context/SearchContext";
import { usePathname, useRouter } from "next/navigation";



const DashboardTopBar = () => {
const {user } = useAuth();
  const router =  useRouter();
  const pathName = usePathname();
  const {setLoading, setSearchText} = useContext(SearchContext);
  const [text, setText] = useState('');

   // handle to college search
   const handleSearch = () => {
    if (!text) {
      return;
    }
    if(!(pathName === '/dashboard/searchresult')){
      router.push('/dashboard/searchresult')
    }
    setSearchText(text)
  };


  return (
<<<<<<< HEAD
    <div className="h-16 bg-white shadow-sm gap-10 md:gap-16 items-center md:px-12 px-6  md:flex justify-between hidden">
      <div className="flex-1">
        <div className="relative">
=======
    <div className="h-16 bg-white shadow-sm gap-10 md:gap-16 items-center md:px-12 px-6 hidden md:flex justify-between">
      <div className="flex-1 flex gap-5">
        <div className="relative flex-1">
>>>>>>> 90a44dd2c498d5d62f08fa8fb937297f1c0421e4
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
            className="block w-full bg-gray-200 p-2 pl-10 text-sm text-gray-900 outline-none rounded-lg"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search here..."
          />
        </div>
          <button onClick={() => handleSearch()} className="primary-btn">search</button>
      </div>
      <div className="flex gap-2 items-center">
        <span>
          <Link
            href='/dasboard/notification'
            className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg"
          >
            <IoMdNotificationsOutline className=" text-xl" />

            <div className="absolute inline-flex items-center justify-center bg-[#ff6633c7]  text-xs font-bold marker:bg-red-500 rounded-full top-2 right-2 ">
              <span className="p-1"></span>
            </div>
          </Link>
        </span>
        <div className="flex gap-5 items-center ">
          <div className="">
            <Image
              className="w-8 h-8 rounded-full ring-2 ring-white"
              src={user?.photoURL}
              alt="user"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{user?.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;