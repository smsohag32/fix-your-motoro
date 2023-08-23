"use client";
import Image from "next/image";
import React, { useState } from "react";

const Profile = () => {
  // Replace with actual user data from your authentication system or API
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profileImage:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=",
  });

  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Update user data in the backend (you would typically make an API request here)
    // For this example, we'll just update the state
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
    });

    // Exit edit mode
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md sm:w-96 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="mb-4 text-center">
        <Image
          src={user.profileImage}
          alt={`${user.name}'s Profile`}
          width={96} // Set the desired width
          height={96} // Set the desired height
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
              value={formData.name}
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
            <p>{user.name}</p>
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

export default Profile;
