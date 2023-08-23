"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import Link from "next/link";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import RegisterFrom from "./RegisterFrom";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";


const SingUp = () => {
  const router = useRouter();
  const {googleLogin} = useAuth()
  const handleGoogleSingIn = () => {
    googleLogin()
      .then(() => {
        router.push("/");
      })
      .catch()
  };


  return (
    <>
    <Helmet>
      <title>College | Sing Up</title>
    </Helmet>
    <PageTitle
        title="Our Register"
        subTitle="Our Register page"
      />
    <div className="flex-col mx-auto my-8 rounded-lg primary-shadow secondary-border max-w-2xl">
        <RegisterFrom />
        <div className="mt-4 text-center">
          <button>
            Already have an account?
            <Link href="/login" className="font-semibold primary-text">
               Login
            </Link>
          </button>
        </div>
        <div onClick={handleGoogleSingIn}>
          <button className="p-[10px] mb-8 cursor-pointer border rounded-lg w-4/5 md:w-2/4  mx-auto flex gap-[6px] mt-[30px]">
            <FcGoogle className="text-[32px]" />
          <span>Continue with Google</span>
          </button>
        </div>
      </div>
  </>
  );
};

export default SingUp;
