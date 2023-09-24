"use client"
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import saveUser from "@/utils/saveUser";
import UploadImage from "@/components/UploadImage/UploadImage";

const SignUpForm = () => {
  const router = useRouter();
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError("");
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
    setValue,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserInfo } = useAuth();

  const passwordMatch = passwordValue === confirmPassword;

  const onSubmit = async (data) => {
    const { name, email,  image } = data;
    setError("");
    if (!passwordMatch) {
      setError("Passwords do not match");
      return;
    }

    try {
      const user = await createUser(email, passwordValue);
      await updateUserInfo(name, image).then((result) => {
        saveUser(user?.user).then((data) => {
          router.push("/");
        });
      });
    } catch (error) { }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="name" className="label">
          <span className="block mb-2 font-bold text-gray-700">Name</span>
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          name="name"
          placeholder="Name"
          className="w-full primary-input"
        />
        {errors.name && (
          <span className="text-red-600">Name is required</span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="block mb-2 font-bold text-gray-700">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          name="email"
          placeholder="Email"
          className="w-full primary-input"
        />
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="photoURL" className="label">
          <span className="block mb-2 font-bold text-gray-700">Image</span>
        </label>
        <input
          type="file"
          name="photoURL"
          onChange={(e) => UploadImage(e, setValue)}
          className="w-full primary-input"
          placeholder="upload Image"
        />
        {/* <input
          type="text"
          {...register("photoURL", { required: true })}
          name="photoURL"
          placeholder="Photo URL"
          className="w-full primary-input"
        /> */}
        {errors.photoURL && (
          <span className="text-red-600">Image is required</span>
        )}
      </div>

      <div className="flex flex-col gap-6 mt-4 md:flex-row">
        <div className="w-full md:w-2/4">
          <label htmlFor="password" className="gap-4 text-lg font-bold">
            Password
          </label>
          <div className="relative flex items-center">
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
              value={passwordValue}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full primary-input"
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            >
              {showPassword ? (
                <HiEyeOff size={20} className="text-gray-500" />
              ) : (
                <HiEye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
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
              Password must have one Uppercase one lower case, one number, and
              one special character.
            </p>
          )}
        </div>

        <div className="w-full md:w-2/4">
          <label htmlFor="confirmPassword" className="mb-2 text-lg font-bold">
            Confirm Password
          </label>
          <div className={`relative flex items-center ${!passwordMatch ? 'error' : ''}`}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              className="w-full primary-input"
            />
            <button
              type="button"
              onClick={handleToggleConfirmPassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            >
              {showConfirmPassword ? (
                <HiEyeOff size={20} className="text-gray-500" />
              ) : (
                <HiEye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
          {!passwordMatch && confirmPassword && (
            <p className="text-red-600 mt-2">Passwords do not match</p>
          )}
        </div>
      </div>

      <div className="pt-4 my-4">
        <input
          className="w-full rounded-lg primary-btn"
          type="submit"
          value="Sign Up"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
