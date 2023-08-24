"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 mx-auto bg-white shadow-md">
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={user?.photoURL}
              alt="User Profile"
              width={550}
              height={250}
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-semibold"> {user?.displayName} </h1>{" "}
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptate omnis commodi asperiores consequuntur
            dolorum deserunt distinctio beatae veniam accusamus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
