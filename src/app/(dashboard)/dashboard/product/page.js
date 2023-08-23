"use client";
import React, { useState } from "react";

const ProductPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    likes: '',
    discount: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductData({ ...productData, image: imageFile });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // TODO: You can add code here to send the productData (including the image) to your backend API.

    // Clear the form inputs after submission
    setProductData({
      name: '',
      description: '',
      price: '',
      rating: '',
      likes: '',
      discount: '',
      image: null,
    });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md sm:w-96 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700 font-medium block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-gray-700 font-medium block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-700 font-medium block mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="text-gray-700 font-medium block mb-1">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={productData.rating}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="likes" className="text-gray-700 font-medium block mb-1">
            Likes:
          </label>
          <input
            type="number"
            id="likes"
            name="likes"
            value={productData.likes}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="discount" className="text-gray-700 font-medium block mb-1">
            Discount:
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={productData.discount}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="text-gray-700 font-medium block mb-1">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductPage;
