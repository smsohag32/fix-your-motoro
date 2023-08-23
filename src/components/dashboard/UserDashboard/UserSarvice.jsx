"use client";
import DashboardTitle from "@/components/Shared/DashboardTitle/DashboardTitle";
import React, { Component } from "react";

export class UserSarvice extends Component {
  render() {
    return (
      <>
        <DashboardTitle title="Our Service" subTitle="Welcome to the Service" />
        <div className="relative mt-10 overflow-x-auto">
          <table className="md:w-[80%] w-full mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  View Details
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <button className="rounded-lg primary-btn">View</button>
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">
                    Rating
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">
                  <button className="rounded-lg primary-btn">View</button>
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">
                      Rating
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">
                  <button className="rounded-lg primary-btn">View</button>
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium text-red-600 dark:text-blue-500 hover:underline">
                    Rating
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default UserSarvice;
