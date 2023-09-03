"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; 

const WorkShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const Data = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1488626517/photo/customer-leaving-his-car-at-an-auto-repair-shop-and-signing-a-form.jpg?s=612x612&w=0&k=20&c=fZlBNY1XzjxUYx0Vx80evUxKFB18DFrWXg6SpUEQpl8=",
      title: "tabal",
      description: "Description for Product 1",
      price: "$100",
      technician: "Technician 1",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1488626517/photo/customer-leaving-his-car-at-an-auto-repair-shop-and-signing-a-form.jpg?s=612x612&w=0&k=20&c=fZlBNY1XzjxUYx0Vx80evUxKFB18DFrWXg6SpUEQpl8=",
      title: "mabal",
      description: "Description for Product 2",
      price: "$150",
      technician: "Technician 2",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1488626517/photo/customer-leaving-his-car-at-an-auto-repair-shop-and-signing-a-form.jpg?s=612x612&w=0&k=20&c=fZlBNY1XzjxUYx0Vx80evUxKFB18DFrWXg6SpUEQpl8=",
      title: "kabal",
      description: "Description for Product 3",
      price: "$120",
      technician: "Technician 3",
    },
  ];


  // api data loading 
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://fya-backend.vercel.app/api/v1/auth/workshops"
          );
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching JSON data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  // api data console.log
  console.log(products);



  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <p className="items-center justify-center text-2xl text-center">
          Services
        </p>

        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 pl-10 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <FaSearch className="absolute text-gray-400 top-2 left-2" />
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Image
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Title
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Description
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Price
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Technician
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="w-16 h-16">
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
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            {item.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-sm leading-5 text-gray-500">
                            {item.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                          {item.technician}
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
