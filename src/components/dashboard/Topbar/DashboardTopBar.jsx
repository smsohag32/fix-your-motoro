"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import SearchContext from "@/context/SearchContext";
import userLogo from "@/assets/userLogo.png";
const DashboardTopBar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const pathName = usePathname();
  const { setLoading, setSearchData, setSearchText } =
    useContext(SearchContext);
  const [text, setText] = useState("");

  // handle to college search
  const handleSearch = async () => {
    if (!text) {
      return;
    }
    if (!(pathName === "/dashboard/searchresult")) {
      router.push("/dashboard/search_result");
    }
    setSearchText(text);
    try {
      const data = await axios(
        `https://fya-backend.vercel.app/api/v1/auth/workshops/search/division?location=${text}`
      );

      setSearchData(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    } finally {
      setLoading(false);
    }

    if (!(pathName === "/dashboard/searchresult")) {
      router.push("/dashboard/search_result");
    }
  };

  return (
    <div className="h-16 md:ml-60 bg-white shadow-sm gap-10 md:gap-16 items-center md:px-12 px-6 hidden md:flex justify-between">
      <div className="flex gap-2 justify-end w-full items-center">
        <span>
          <Link
            href="/dasboard/notification"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg"
          >
            <IoMdNotificationsOutline className=" text-xl" />

            <div className="absolute inline-flex items-center justify-center bg-[#ff6633c7]  text-xs font-bold marker:bg-red-500 rounded-full top-2 right-2 ">
              <span className="p-1"></span>
            </div>
          </Link>
        </span>
        <div className="flex gap-5 items-center ">
          <Link href="/" className="">
            <Image
              className="w-8 h-8 rounded-full ring-2 ring-white"
              src={user?.photoURL || userLogo}
              alt="user"
              width={40}
              height={40}
            />
          </Link>
          <div>
            <p className="font-semibold text-sm">{user?.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
