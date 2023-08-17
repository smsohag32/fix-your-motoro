"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import Link from "next/link";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import RegisterFrom from "./RegisterFrom";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";


const SingUp = () => {

  const {googleLogin} = useAuth()

  const handleGoogleSingIn = async () => {
    const toastId = toast.loading("Loading...")
    try{
      const user = await googleLogin();
      toast.dismiss(toastId)
      toast.success("User Sing in Successfully")
    }
    catch(error){
      toast.dismiss(toastId)
      toast.error(error.message || "User not Sing in")
    }
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
    <div className="flex-col mx-auto my-8 rounded-lg primary-shadow primary-border md:w-2/6 hero-content lg:flex-row-reverse">
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
          <button className="p-[10px] mb-8 bg-blue-200 cursor-pointer border rounded-lg w-4/5 md:w-2/4  mx-auto flex gap-[6px] mt-[30px]">
            <FcGoogle className="text-[32px]" />
          <span>Continue with Google</span>
          </button>
        </div>
      </div>
  </>
  );
};

export default SingUp;
