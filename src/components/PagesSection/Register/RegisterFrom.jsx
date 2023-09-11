"use client";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import saveUser from "@/utils/saveUser";

const SignUpForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserInfo } = useAuth();

  const onSubmit = async (data) => {
    const { name, email, password, photoURL } = data;
    setError();
    if (data.password !== data.confirmPassword) {
      setError("Your password did not match");
      return;
    }

    try {
      const user = await createUser(email, password);
      await updateUserInfo(name, photoURL).then((result) => {
        saveUser(user?.user).then((data) => {
          router.push("/");
        });
      });
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="" className="label">
          <span className="block mb-2 font-bold text-gray-700">Name</span>
        </label>
        <input
          {...register("name", { required: true })}
          type="name"
          name="name"
          placeholder="Name"
          className="w-full border border-gray-300 focus:outline-none focus:border-[#69d94f] px-4 py-2"
        />
        {errors.name && <span className="text-red-600">Name is required</span>}
      </div>
      <div className="form-control">
        <label htmlFor="" className="label">
          <span className="block mb-2 font-bold text-gray-700">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          name="email"
          placeholder="email"
          className="w-full border border-gray-300 focus:outline-none focus:border-[#69d94f] px-4 py-2"
        />
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="" className="label">
          <span className="block mb-2 font-bold text-gray-700">Photo URL</span>
        </label>

        <input
          type="text"
          {...register("photoURL", { required: true })}
          name="photoURL"
          placeholder="Photo URL"
          className="w-full border border-gray-300 focus:outline-none focus:border-[#69d94f] px-4 py-2"
        />
        {errors.photoURL && (
          <span className="text-red-600">Photo URL is required</span>
        )}
      </div>

      <div className="flex flex-col gap-6 mt-4 md:flex-row">
        <div className="md:w-2/4">
          <label htmlFor="password" className="gap-4 text-lg font-bold">
            Password
          </label>
          <div className="relative top-3">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full border border-gray-300 focus:outline-none focus:border-[#69d94f] px-4 py-2"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none bottom-1"
            >
              {showPassword ? (
                <HiEyeOff size={20} className="text-gray-500" />
              ) : (
                <HiEye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/4">
          <label htmlFor="confirmPassword" className="mb-2 text-lg font-bold">
            Confirm Password
          </label>
          <div className="relative top-3">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 focus:outline-none focus:border-[#69d94f] px-4 py-2"
            />
            <p className="text-red-600">{error}</p>
            <button
              type="button"
              onClick={handleToggleConfirmPassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none bottom-1"
            >
              {showConfirmPassword ? (
                <HiEyeOff size={20} className="text-gray-500" />
              ) : (
                <HiEye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-4 my-4">
        <input
          className="w-full rounded-lg primary-btn"
          type="submit"
          value="Sing Up"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
