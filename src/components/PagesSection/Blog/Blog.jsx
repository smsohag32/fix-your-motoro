"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import React, { useEffect, useState } from "react";

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
    <div className="mt-32">
      <PageTitle
        title="Latest Blog Posts"
        subTitle="Stay up to date with new technologies"
      />
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-6">
            {blog.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
