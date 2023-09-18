"use client";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useWorkshops from "@/hooks/useWorkshops";
import Image from "next/image";
import React from "react";

const ManageWorkShop = () => {
  const { workshops, wLoading, refetch } = useWorkshops();
  // console.log(workshops);

  // confirm function
  const handleConfirm = (workshop) => {
    const newStatus = "confirm";
    const requestBody = JSON.stringify({ status: newStatus });
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/workshops/status/${workshop._id}`;

    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Workshop status updated successfully:", data);
        refetch();
      })
      .catch((error) => {
        console.error("Error updating workshop status:", error);
      });
  };

  // Disable function
  const handleDisable = (workshop) => {
    const newStatus = "disabled";
    const requestBody = JSON.stringify({ status: newStatus });
    const apiUrl = `https://fya-backend.vercel.app/api/v1/auth/workshops/status/${workshop._id}`;

    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Workshop status updated successfully:", data);
        refetch();
      })
      .catch((error) => {
        console.error("Error updating workshop status:", error);
      });
  };

  // delete function
  const handleDelete = () => {
    alert("handle delete");
  };

  return (
    <div className="min-h-screen px-5 md:px-8 bg-gray-100 py-8 ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Manage Workshops
        </h2>
        {wLoading ? (
          <MidSpinner />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    WorkShops
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-5 tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((workshop) => (
                  <tr key={workshop._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={workshop.image}
                              alt="Description of the image"
                              width={300}
                              height={200}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{workshop.name}</div>
                          <div className="text-sm opacity-50">
                            {workshop.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <span
                        className={`px-2 py-1 rounded-full ${
                          workshop?.status === "confirm"
                            ? "bg-green-400"
                            : workshop?.status === "disabled"
                            ? "bg-yellow-400"
                            : ""
                        }`}
                      >
                        {workshop.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap space-x-2">
                      <button
                        onClick={() => handleConfirm(workshop)}
                        disabled={workshop.status === "confirm" ? true : false}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDisable(workshop)}
                        disabled={workshop.status == "disabled" ? true : false}
                        className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md"
                      >
                        Disable
                      </button>
                      <button
                        onClick={() => handleDelete(workshop)}
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

export default ManageWorkShop;
