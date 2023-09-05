"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { PiHandsClappingBold } from "react-icons/pi";
import useBlogs from "@/hooks/UseBlogs";
import { useRouter } from "next/navigation";
import MidSpinner from "@/components/Spinners/MidSpinner";

const Blog = () => {
  const { blogs, bLoading, refetchBlogs } = useBlogs();

  const router = useRouter();

  const handleLike = ()=> {
    console.log("likessssss")
  }

   if (bLoading) {
     return (
       <div className="mt-32 default-container">
         <MidSpinner />
       </div>
     );
   }

   if (!blogs || blogs.length === 0) {
     return <p className="mt-32 default-container">No blog posts available.</p>;
   }

  return (
    <div className="my-32 default-container ">
      <PageTitle
        title="Latest Blog Posts"
        subTitle="Stay up to date with new technologies"
      />
      <div className="">
        <div className="max-w-4xl mx-auto ">
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="p-3 primary-shadow  duration-500 transition-all transform items-center"
              >
                {/* <Image
                  src={
                    "https://images.unsplash.com/photo-1508048236731-b5ef91f7840c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNhciUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  width="500"
                  height="300"
                  alt="test image"
                ></Image> */}
                <div className="flex gap-5 my-5">
                  <Image
                    className="rounded-full object-fil h-12 w-12"
                    src={
                      "https://images.unsplash.com/photo-1508048236731-b5ef91f7840c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNhciUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    width="48"
                    height="48"
                    alt="test image"
                  ></Image>
                  <p>author name </p>
                </div>
                <h3 className="text-lg font-semibold mb-2">{blog?.title}</h3>
                <p className="text-gray-600 mb-2 text-base">{blog?.content}</p>
                <p className="my-5">10 min read . {blog.date}</p>
                <div className=" flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <button className="text-3xl" onClick={handleLike}>
                      <PiHandsClappingBold />
                    </button>
                    <p>{blog?.likes}</p>
                  </div>
                  <div className=" text-3xl flex items-center gap-3 ">
                    {/* <CiBookmarkPlus /> */}
                    <button onClick={() => console.log(`hello${blog?.title}`)}>
                      <FaRegComment />
                    </button>
                    <button
                      className="primary-text "
                      // className="primary-btn"
                      onClick={() => router.push(`/blog/${blog?._id}`)}
                    >
                      <BsArrowRightCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
