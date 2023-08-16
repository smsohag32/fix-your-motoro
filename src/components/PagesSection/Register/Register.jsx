"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import Link from "next/link";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import RegisterFrom from "./RegisterFrom";
import useAuth from "@/hooks/useAuth";
import { signInWithPopup } from "firebase/auth";
import auth, { googlleProvider } from "@/firebase/firebase.auth";


const SingUp = () => {
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googlleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="flex-col primary-shadow primary-border  mx-auto my-8 rounded-lg md:w-2/6  hero-content lg:flex-row-reverse">
        <RegisterFrom />
        <div className="mt-4 text-center">
          <button>
            Already have an account?
            <Link href="/login" className="font-semibold primary-text">
               Login
            </Link>
          </button>
        </div>
        <div
          onClick={handleGoogleSingIn}
          className="p-[10px] mb-8 bg-blue-200 cursor-pointer border rounded-lg w-4/5 md:w-2/4  mx-auto flex gap-[6px] mt-[30px]">
          <FcGoogle className="text-[32px]" />
          <span>Continue with Google</span>
        </div>
      </div>
  </>
  );
};

export default SingUp;
