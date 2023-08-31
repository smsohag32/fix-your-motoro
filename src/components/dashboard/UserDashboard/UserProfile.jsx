"use client"
import UserUpdateProfileModal from "@/components/Modal/userModal/UserUpdateProfileModal";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, cLoading, refetch } = useUserInfo();

  return (
    <div>
      <div className="max-w-screen-lg mx-auto bg-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-500 py-8 px-6 text-white">
          {cLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  className="object-cover rounded-full"
                  src={userInfo?.user?.image}
                  alt="User_profile"
                  layout="fill"
                />
              </div>
              <h1 className="text-2xl font-semibold text-center">
                {userInfo?.user?.name}
              </h1>
              <p className="text-sm text-center opacity-75">
                {userInfo?.user?.email}
              </p>
            </>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Phone Number:</p>
            <p className="text-gray-500">
              {userInfo?.user?.phone}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Address:</p>
            <p className="text-gray-500">
              {userInfo?.user?.address}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Gender:</p>
            <p className="text-gray-500">
              {userInfo?.user?.gender}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-6 bg-white text-blue-500 py-2 px-4 rounded-full w-full hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <UserUpdateProfileModal refetch={refetch}  isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="mt-16">
        <Link
          className="primary-btn"
          href={"/dashboard/user/user_profile/center_req"}
        >
          Request to add Workshop Center
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
