"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBeer, FaHands, FaHandsHelping, FaRegComment } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import { PiHandsClappingBold } from "react-icons/pi";


const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-32 default-container">
      <PageTitle
        title="Latest Blog Posts"
        subTitle="Stay up to date with new technologies"
      />
      <div className="">
        <div className="max-w-4xl mx-auto ">
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {blog.map((post) => (
              <div
                key={post.id}
                className="p-3 primary-shadow hover:scale-95 duration-500 transition-all transform items-center"
              >
                <Image
                  src={
                    "https://images.unsplash.com/photo-1508048236731-b5ef91f7840c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNhciUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  width="500"
                  height="300"
                  alt="test image"
                ></Image>
                <div className="flex gap-5 my-5">
                  <Image
                    className="rounded-full object-fill"
                    src={
                      "https://images.unsplash.com/photo-1508048236731-b5ef91f7840c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNhciUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    width="50"
                    height="50"
                    alt="test image"
                  ></Image>
                  <p>author name: </p>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  The Ultimate Guide to Mastering CSS Grid
                </h3>
                <p className="text-gray-600 mb-2 text-base">
                  CSS Grid is one of the most powerful layout tools available
                  for web developers. It is a two-dimensional layout system that
                  allows you to…
                </p>
                <p className="my-5">10 min read . May10</p>
                <div className="text-xl flex justify-between">
                  <div className="flex gap-3">
                    <PiHandsClappingBold />
                    <FaRegComment />
                  </div>
                  <div className="flex gap-3 mb-3">
                    <CiBookmarkPlus />
                    <FiMoreHorizontal />
                  </div>
                </div>
              </div>
            ))}
            {/* {blog.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
