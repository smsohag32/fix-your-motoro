import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const UserDashboardStats = ({
  totalWorkOrder,
  totalSuccessOrder,
  totalPostponOrder,
  approvedOrder,
  pendingOrder,
}) => {

  useEffect(() => {
    AOS.init({ offset: 300 , duration: 700});
  }, []);
  return (
    <div data-aos="zoom-in-left" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Total order */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Work Orders</p>
            <p className="text-2xl font-semibold">{totalWorkOrder}</p>
          </div>
          <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Pending Order */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500"> Pending Order</p>
            <p className="text-2xl font-semibold">{pendingOrder}</p>
          </div>
          <div className="bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-7.618a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total PostPon Order */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Postpon Order</p>
            <p className="text-2xl font-semibold">{totalPostponOrder}</p>
          </div>
          <div className="bg-red-500 rounded-full h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Approved Order */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Approved Order</p>
            <p className="text-2xl font-semibold">{approvedOrder}</p>
          </div>
          <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* totalSuccessOrder */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Success Order</p>
            <p className="text-2xl font-semibold">{totalSuccessOrder}</p>
          </div>
          <div className="bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-7.618a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardStats;
