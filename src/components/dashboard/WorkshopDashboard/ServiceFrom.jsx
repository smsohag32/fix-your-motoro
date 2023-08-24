"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ServiceFrom = () => {
  const router = useRouter();

  const [workshopData, setWorkshopData] = useState({
    workshopId: '',
    serviceName: '',
    serviceCategory: '',
    serviceDescription: '',
    serviceDuration: '',
    servicePrice: '',
    benefits: '',
    serviceImage: '',
    warranty: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkshopData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setWorkshopData((prevData) => ({
      ...prevData,
      serviceImage: imageUrl,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or data handling here
    console.log(workshopData);
    // Redirect to a new page or perform other actions after submission
    router.push('/success'); // Change '/success' to the desired route
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
        <h2 className="mb-4 text-2xl font-semibold">Add Workshop Details</h2>
        
        <div className="mb-4">
          <label htmlFor="workshopId" className="block mb-1 font-medium">
            Workshop ID
          </label>
          <input
            type="text"
            id="workshopId"
            name="workshopId"
            value={workshopData.workshopId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Other input fields */}
        <div className="mb-4">
          <label htmlFor="serviceName" className="block mb-1 font-medium">
            Service Name
          </label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            value={workshopData.serviceName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Similar input fields for service category, description, duration, price, benefits */}
        
        <div className="mb-4">
          <label htmlFor="warranty" className="block mb-1 font-medium">
            Warranty
          </label>
          <input
            type="text"
            id="warranty"
            name="warranty"
            value={workshopData.warranty}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="serviceImage" className="block mb-1 font-medium">
            Service Image
          </label>
          <input
            type="file"
            id="serviceImage"
            name="serviceImage"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
          {workshopData.serviceImage && (
            <Image
              src={workshopData.serviceImage}
              alt="Service Image"
              width={200}
              height={150}
              className="mt-2"
            />
          )}
        </div>
        
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Workshop
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceFrom;
