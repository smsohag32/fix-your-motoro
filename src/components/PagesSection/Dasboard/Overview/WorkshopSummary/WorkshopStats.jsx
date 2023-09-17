import React from "react";

const WorkshopStats = ({
  pendingOrder,
  totalWorkOrder,
  totalPostponOrder,
  completeOrder,
  approvedOrder,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Total Pending Order */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Pending Orders</p>
            <p className="text-2xl font-semibold">{pendingOrder}</p>
          </div>
          <div className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Work Orders */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Work Orders</p>
            <p className="text-2xl font-semibold">{totalWorkOrder}</p>
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

      {/* Total PostPoned Orders */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Postponed Orders</p>
            <p className="text-2xl font-semibold">{totalPostponOrder}</p>
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

      {/* Total Complete Orders */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Complete Orders</p>
            <p className="text-2xl font-semibold">{completeOrder}</p>
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
    </div>
  );
};

export default WorkshopStats;
