"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import RegisterFrom from "./RegisterFrom";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import saveUser from "@/utils/saveUser";

const SingUp = () => {
  const router = useRouter();
  const { googleLogin } = useAuth();

  const handleGoogleSingIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        saveUser(user).then((data) => { });
        router.push("/");
      })
      .catch();
  };

  return (
    <>
      <PageTitle title="Our Register" subTitle="Our Register page" />
      <div className="my-12 default-container">
        <div className="flex-col max-w-2xl p-8 mx-auto my-8 rounded-lg primary-shadow secondary-border">
          <RegisterFrom />
          <div className="text-sm font-medium text-gray-600 dark:text-gray-600">
            Already have an account?
            <Link href="/login" className="font-semibold primary-text">
              Login
            </Link>
          </div>
          <div
            onClick={handleGoogleSingIn}
            className="p-[10px] cursor-pointer border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]"
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
