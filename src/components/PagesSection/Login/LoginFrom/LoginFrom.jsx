"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { HiEye, HiEyeOff } from "react-icons/hi";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import saveUser from "@/utils/saveUser";

const LoginFrom = () => {
  const router = useRouter();
  const { signIn, googleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handelLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn(email, password)
        .then((result) => {
          router.push("/");

        })
        // .catch((err) => console.log(err));
    } catch (error) {
     
    }
  };

  const handleGoogleSingIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        saveUser(user).then(data => {
          console.log(data);
        })
        console.log(user);
        router.push("/");
      })
      .catch();
  };

  return (
    <div className="">
      <Helmet>
        <title>FYM | Login</title>
      </Helmet>
      <PageTitle title="Our Login" subTitle="Our Login page" />
      <div className="w-full max-w-sm mx-auto mb-8 rounded-lg shadow bg-gray-50 primary-shadow primary-border sm:p-6 md:p-8 ">
        <form onSubmit={handelLogin} className="space-y-6">
          <h5 className="text-3xl font-medium text-center text-gray-900 dark:text-white">
            Login
          </h5>
          <div>
            <label for="email" className="block mb-2 font-bold text-gray-700">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="form-control">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-bold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute transform -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer top-1/2 right-3 focus:outline-none"
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>
          </div>
          <input
            className="w-full rounded-lg primary-btn"
            type="submit"
            value="Login"
          />
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link href="/register" className="font-semibold primary-text">
              Create account
            </Link>
          </div>
          <div
            onClick={handleGoogleSingIn}
            className="p-[10px] bg-blue-200 cursor-pointer border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]"
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFrom;
