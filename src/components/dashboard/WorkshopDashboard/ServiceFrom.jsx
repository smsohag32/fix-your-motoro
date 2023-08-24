"use client";
import DashboardTitle from "@/components/Shared/DashboardTitle/DashboardTitle";
import { useRouter } from "next/navigation";
import { useState } from "react";


const ServiceFrom = () => {
  const { register, handleSubmit } = useForm()
  const {user} = useAuth();
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=4ef7007f7046a0746df3c9c722fd7459`

  const [workshopData, setWorkshopData] = useState({
    workshopId: "",
    serviceName: "",
    serviceCategory: "",
    serviceDescription: "",
    serviceDuration: "",
    servicePrice: "",
    benefits: "",
    serviceImage: "",
    warranty: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setWorkshopData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   const imageUrl = URL.createObjectURL(file);
  //   setWorkshopData((prevData) => ({
  //     ...prevData,
  //     serviceImage: imageUrl,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workshopData);
    router.POST('https://fya-backend.vercel.app/api/v1/auth/services'); 
  };
  
  return (
    <div>
        <DashboardTitle title="Add Service" subTitle="Welcome to the Add Service" />
      <div className="max-w-lg py-4 mx-auto">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
        <h2 className="mb-4 text-2xl font-semibold">Add Workshop Details</h2>
        
        <div className="mb-4">
          <label htmlFor="workshopId" className="block mb-1 font-medium">
          Workshop Id
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
        
        <div className="mb-4">
          <label htmlFor="serviceCategory" className="block mb-1 font-medium">
            Service Category
          </label>
          <input
            type="text"
            id="serviceCategory"
            name="serviceCategory"
            value={workshopData.serviceCategory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="serviceDescription" className="block mb-1 font-medium">
            Service Description
          </label>
          <textarea
            id="serviceDescription"
            name="serviceDescription"
            value={workshopData.serviceDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="serviceDuration" className="block mb-1 font-medium">
            Service Duration
          </label>
          <input
            type="text"
            id="serviceDuration"
            name="serviceDuration"
            value={workshopData.serviceDuration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="servicePrice" className="block mb-1 font-medium">
            Service Price
          </label>
          <input
            type="text"
            id="servicePrice"
            name="servicePrice"
            value={workshopData.servicePrice}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="benefits" className="block mb-1 font-medium">
            Benefits
          </label>
          <textarea
            id="benefits"
            name="benefits"
            value={workshopData.benefits}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
        
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
              className="mt-2 bg-[#f02801] text-white"
            />
          )}
        </div>
        
        <div className="mt-4">
          <button
            
            type="submit"
            className="w-full rounded-lg primary-btn "
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ServiceFrom;
