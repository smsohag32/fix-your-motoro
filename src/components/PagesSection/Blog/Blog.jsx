"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Image from "next/image";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import useBlogs from "@/hooks/UseBlogs";
import { useRouter } from "next/navigation";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useAuth from "@/hooks/useAuth";
import { FaRegComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

const Blog = () => {
  const { blogs, bLoading, refetch } = useBlogs();
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ offset: 300, duration: 700 });
  }, []);

  const handleLike = async (blog) => {
    const likeData = {
      user_photo: user?.photoURL,
      user_email: user?.email,
      user_name: user?.displayName,
    };

    const response = await axios.patch(`https://fya-backend.vercel.app/api/v1/auth/blogs/like/${blog?._id}`, likeData);
    if (response.data) {
      refetch();
    };
  };

  if (bLoading) {
    return (
      <div className="mt-32 default-container">
        <MidSpinner />
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <p className="mt-32 text-center text-3xl font-bold text-blue-500  default-container">
        No blog posts available.
      </p>
    );
  }

  return (
    <div className="default-container ">
      <PageTitle
        title="Latest Blog Posts"
        subTitle="Stay up to date with new technologies"
      />
      <div>      
          <div data-aos="fade-up" className="grid grid-cols-1 gap-5 mt-12">
            {blogs.map((blog) => (
              <div
                
                key={blog._id}
                className="p-3 primary-shadow hover:transition-all transform duration-500 items-center"
              >
                <div className="flex gap-5">
                  <figure>
                    <Image
                      src="https://i.ibb.co/GWKhzqd/istockphoto-1423278446-170667a.webp"
                      alt={blog.title}
                      width={350}
                      height={280}
                    />

                    <figcaption className="text-xs font-normal text-slate-400">
                      {blog.title}
                    </figcaption>
                  </figure>
                  <div className="lg:w-[60%] flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold mb-3">
                        {blog.title}
                      </h2>
                      <p className="text-slate-600">
                        {blog.content.slice(0, 350)}....
                      </p>
                    </div>
                    <div className="lg:flex justify-between mt-3">
                      <h4> {blog.date} </h4>
                      <div className="lg:w-[60%] mt-2">
                        <div className=" flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <button
                              // make react conditional
                              className={`text-3xl`}
                              onClick={() => handleLike(blog)}
                            >
                              <AiOutlineHeart />
                            </button>
                            <span>
                              {blog?.likes?.length > 0
                                ? blog?.likes?.length
                                : "0"}
                            </span>
                          </div>
                          {/* <div className=" text-3xl flex items-center gap-3 ">
                            <button onClick={() => handleComment(blog)}>
                              <FaRegComment />
                            </button>
                          </div> */}
                          <div
                            onClick={() => router.push(`/blogs/${blog?._id}`)}
                            className="flex items-center gap-2 cursor-pointer px-2 border-b rounded-md font-mono text-green-600 text-xl"
                          >
                            <button className="">..Read More</button>
                            <LiaHandPointRightSolid />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Blog;
