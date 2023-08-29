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
        <div className="flex-col max-w-2xl mx-auto my-8 rounded-lg primary-shadow secondary-border">
          <RegisterFrom />
          <div className="text-center ">
            <button className="flex justify-center w-full gap-2">
              Already have an account?
              <Link href="/login" className="font-semibold primary-text">
                Login
              </Link>
            </button>
          </div>
          <div onClick={handleGoogleSingIn}>
            <button className="hover:border-[#f02801] hover:text-[#f02801] p-[10px] mb-8 items-center border rounded-lg text-center justify-center mx-auto flex gap-[6px] mt-[30px]">
              <FcGoogle className="text-[32px]" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
