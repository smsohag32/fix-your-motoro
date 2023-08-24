import Image from "next/image";
import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profileImage:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=",
  });

  const [isEditing, setIsEditing] = useState(false);
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
    // TODO: Update user data in the backend . make an API request here

    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
    });

    setIsEditing(false);
  };

=========
const ProfilePage = () => {
>>>>>>>>> Temporary merge branch 2
  return (
    <div className="p-6 mx-auto bg-white rounded-md shadow-md sm:w-96">
      <h2 className="mb-4 text-2xl font-semibold">Profile</h2>
      <div className="mb-4 text-center">
        <Image
          src={user.profileImage}
          alt={`${user.name}'s Profile`}
          width={96}
          height={96}
          className="mx-auto "
        />
      </div>
      {isEditing ? (
        <div className="mb-4">
          <div className="mb-2">
            <label className="block mb-1 font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name "
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium text-gray-700">
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
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Name:
            </label>
            <p>{user.name}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Email:
            </label>
            <p>{user.email}</p>
          </div>
          <button
            onClick={handleEditClick}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage ;
>>>>>>>>> Temporary merge branch 2
