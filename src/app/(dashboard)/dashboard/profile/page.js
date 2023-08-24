"use client"
import Image from "next/image";
import React, { useContext,useState } from "react";
import AuthContext from "@/context/AuthContext";


const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user.displayName || "",
    email: user.email || "",
  });
 
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    // Call the profileUpdate function from your context
    profileUpdate({ displayName: formData.name, email: formData.email });

    // Exit edit mode
    setIsEditing(false);
  };
  return (
    <div className="p-6 bg-white shadow-md rounded-md sm:w-96 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="mb-4 text-center">
        <Image
          src={user.photoURL}
          alt={`${user.displayName}'s Profile`}
          width={96}
          height={96}
          className=" mx-auto"
        />
      </div>
      {isEditing ? (
        <div className="mb-4">
          <div className="mb-2">
            <label className="text-gray-700 font-medium block mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name "
              value={formData.displayName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700 font-medium block mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label className="text-gray-700 font-medium block mb-1">
              Name:
            </label>
            <p>{user.displayName}</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 font-medium block mb-1">
              Email:
            </label>
            <p>{user.email}</p>
          </div>
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage ;
