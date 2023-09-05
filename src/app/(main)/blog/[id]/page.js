"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MidSpinner from "@/components/Spinners/MidSpinner";

const BlogDetailPage = ({ params }) => {

  
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fya-backend.vercel.app/api/v1/auth/blogs/${params.id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);


   if (loading) {
     return <MidSpinner />;
   }

  return (
    <div className="my-36 default-container">
      <div>
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-2">{blog.date}</p>
        <div className="prose">{blog?.content}</div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
