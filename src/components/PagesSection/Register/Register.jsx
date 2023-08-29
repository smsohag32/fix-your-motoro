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
        saveUser(user).then((data) => {});
        router.push("/");
      })
      .catch();
  };

  return (
    <>
      <PageTitle title="Our Register" subTitle="Our Register page" />
      <div className="default-container my-12">
        <div className="flex-col mx-auto my-8 rounded-lg primary-shadow secondary-border max-w-2xl">
          <RegisterFrom />
          <div className="mt-4 text-center">
            <button className="flex gap-2 justify-center w-full">
              Already have an account?
              <Link href="/login" className="font-semibold primary-text">
                Login
              </Link>
            </button>
          </div>
          <div onClick={handleGoogleSingIn}>
            <button className="p-[10px] mb-8 cursor-pointer border rounded-lg w-full text-center justify-center  mx-auto flex gap-[6px] mt-[30px]">
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
