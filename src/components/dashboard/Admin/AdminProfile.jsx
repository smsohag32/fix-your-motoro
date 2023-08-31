"use client"
import UserUpdateProfileModal from "@/components/Modal/userModal/UserUpdateProfileModal";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import { useState } from "react";

const AdminProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, cLoading, refetch } = useUserInfo();

  return (
    <div className="md:mt-12">
      <div className="max-w-screen-lg mx-auto overflow-hidden bg-gray-300 rounded-lg shadow-lg">
        <div className="px-6 py-8 text-white bg-blue-500">
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
          <h2 className="mb-4 text-xl font-semibold">Profile Information</h2>
          <div className="mb-4">
            <p className="mb-2 text-gray-700">Phone Number:</p>
            <p className="text-gray-500">
              {userInfo?.user?.phone}
            </p>
          </div>
          <div className="mb-4">
            <p className="mb-2 text-gray-700">Address:</p>
            <p className="text-gray-500">
              {userInfo?.user?.address}
            </p>
          </div>
          <div className="mb-4">
            <p className="mb-2 text-gray-700">Gender:</p>
            <p className="text-gray-500">
              {userInfo?.user?.gender}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 mt-6 text-blue-500 bg-white rounded-full hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <UserUpdateProfileModal refetch={refetch}  isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AdminProfile;
