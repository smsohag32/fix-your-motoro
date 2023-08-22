"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 

const WorkShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const Data = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1488626517/photo/customer-leaving-his-car-at-an-auto-repair-shop-and-signing-a-form.jpg?s=612x612&w=0&k=20&c=fZlBNY1XzjxUYx0Vx80evUxKFB18DFrWXg6SpUEQpl8=",
      title: "Product 1",
      description: "Description for Product 1",
      price: "$100",
      technician: "Technician 1",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1488626517/photo/customer-leaving-his-car-at-an-auto-repair-shop-and-signing-a-form.jpg?s=612x612&w=0&k=20&c=fZlBNY1XzjxUYx0Vx80evUxKFB18DFrWXg6SpUEQpl8=",
      title: "Product 2",
      description: "Description for Product 2",
      price: "$150",
      technician: "Technician 2",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1488626517/photo/customer-leaving-his-car-at-an-auto-repair-shop-and-signing-a-form.jpg?s=612x612&w=0&k=20&c=fZlBNY1XzjxUYx0Vx80evUxKFB18DFrWXg6SpUEQpl8=",
      title: "Product 3",
      description: "Description for Product 3",
      price: "$120",
      technician: "Technician 3",
    },
  ];

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <p className="text-2xl justify-center items-center text-center">
          Services
        </p>

        {/* <div className="mt-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-md border border-gray-300"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div> */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Technician
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Data.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="h-16 w-16">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={64}
                              height={64}
                              className="rounded-full"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {item.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-sm leading-5 text-gray-500">
                            {item.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                          {item.technician}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap overflow-hidden overflow-ellipsis">
                          {/* Make the truncated text clickable */}
                          <Link href={`/product/${item.id}`} className="">
                            ...
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShopPage;
