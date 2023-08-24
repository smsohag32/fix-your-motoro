"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white mx-auto p-8  shadow-md">
        <div className="flex justify-center">
          <div className=" rounded-3xl overflow-hidden">
            <Image
              src={user?.photoURL}
              alt="User Profile"
              width={550}
              height={250}
            />
          </div>
        </div>
        <div className="text-center mt-4">
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

export default Profile;
