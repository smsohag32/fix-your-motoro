"use client";
import React from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";
import Spinner from "@/components/Spinners/Spinner";
import useAllUsers from "@/hooks/useAllUsers";

const ManageUsers = () => {
  const { users, uLoading, refetch } = useAllUsers();

  const handleMakeAdmin = async (user) => {
    const newRole = "admin";
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/users/role/${user?.email}`;
    try {
      await axios.patch(apiUrl, { role: newRole });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User is now an Admin",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.error("Error making user an admin:", error);
    }
  };

  const handleMakeWorkshopCenter = async (user) => {
    const newRole = "workshopCenter";
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/users/role/${user?.email}`;
    try {
      await axios.patch(apiUrl, { role: newRole });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User is now a Workshop Center",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.error("Error making user a workshop center:", error);
    }
  };

  const handleDelete = (email) => {
    const url = `https://fya-backend.vercel.app/api/v1/auth/users/${email}`;
    try {
      Swal.fire({
        title: "Are you sure?",
        text: `Do you want to delete ${email}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const res = axios.delete(url);
          Swal.fire("Deleted!", "User is deleted done");
          refetch();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen px-5 md:px-8 bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Manage Users
        </h2>
        {uLoading ? (
          <Spinner />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Users
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-20 overflow-hidden flex items-center h-20">
                          <Image
                            src={user.image || ""}
                            alt="User Image"
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm text-gray-600">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <span
                        className={`px-2 py-1 text-xs text-white rounded-full ${
                          user?.role === "admin"
                            ? "bg-blue-500"
                            : user?.role === "workshopCenter"
                            ? "bg-green-400"
                            : ""
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap space-x-2">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        disabled={user.role === "admin"}
                        className={`${
                          user.role === "admin"
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                        } text-white font-semibold px-4 py-2 rounded-md`}
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleMakeWorkshopCenter(user)}
                        disabled={user.role === "workshopCenter"}
                        className={`${
                          user.role === "workshopCenter"
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600"
                        } text-white font-semibold px-4 py-2 rounded-md`}
                      >
                        Make Workshop Center
                      </button>
                      <button
                        onClick={() => handleDelete(user?.email)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
