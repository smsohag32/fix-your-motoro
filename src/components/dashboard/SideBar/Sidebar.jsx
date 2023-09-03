"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import useUserInfo from "@/hooks/useUserInfo";
import WorkshopAgentLink from "./WorkshopAgentLink";
import UserLink from "./UserLink";
import useAuth from "@/hooks/useAuth";
import AdminLInk from "./AdminLink";
import { useRouter } from "next/navigation";
import NavLink from "@/components/Shared/Header/NavLink";

const Sidebar = () => {
  const { userInfo } = useUserInfo();
  const router = useRouter();
  // console.log(userInfo);

  const { logout } = useAuth();
  const handleLogOut = async () => {
    await logout();
    router.replace("/");
  };

  // console.log(userInfo);
  return (
    <div>
      {/* Technician side nav */}
      <div className="">
        <Disclosure as="nav">
          <Disclosure.Button className="absolute inline-flex items-center justify-center p-2 text-gray-800 rounded-md top-4 right-4 peer hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu
              className="block w-6 h-6 md:hidden"
              aria-hidden="true"
            />
          </Disclosure.Button>
          <div className="fixed top-0 z-20 w-full h-screen p-6 overflow-y-scroll duration-200 ease-out delay-150 bg-white -left-full lg:left-0 lg:w-72 peer-focus:left-0 peer:transition">
            <div className="flex flex-col justify-start item-center">
              <Image
                className="w-full pb-4 text-base font-bold text-center text-blue-900 cursor-pointer"
                src="https://i.ibb.co/Tm3vXhj/logoFix.jpg"
                alt="logo"
                width="350"
                height="300"
              />
              {/* name Dynamic */}
              <h1 className="w-full pb-4 text-base font-bold text-center text-blue-900 uppercase border-b border-gray-100 cursor-pointer">
                {userInfo?.user?.role ? userInfo?.user?.role : "FYT"}
              </h1>
              {userInfo?.user?.role === "admin" ? (
                <AdminLInk />
              ) : userInfo?.user?.role === "workshopCenter" ? (
                <WorkshopAgentLink />
              ) : (
                <UserLink />
              )}
              {/* logout btn */}
              <div className="">
                <div className="my-4 ">
                  <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 border border-gray-200 rounded-md cursor-pointer hover:bg-[#69d94f] group hover:shadow-lg">
                    <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 fnt-semibold group-hover:text-white">
                      <button onClick={handleLogOut}>Logout</button>
                    </h3>
                  </div>
                </div>
                {/* home btn */}
                <div className="my-4 ">
                  <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 border border-gray-200 rounded-md cursor-pointer hover:bg-[#69d94f] group hover:shadow-lg ">
                    <FaHome className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 fnt-semibold group-hover:text-white">
                      <Link href="/">Home</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
    </div>
  );
};

export default Sidebar;
