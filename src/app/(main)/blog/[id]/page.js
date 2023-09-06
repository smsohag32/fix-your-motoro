"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const BlogDetailPage = ({ params }) => {
  const [comment, setComment] = useState('');
  const { user } = useAuth();

  const {
    data: blog, refetch, isLoading: bLoading} = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/blogs/${params.id}`
      );
      return res.data;
    },
  });
 

  const handleCommentSubmit = async() => {
    
    const commentData = {
      user_name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      comment: comment,
    };
    const response = await axios.patch(
      `https://fya-backend.vercel.app/api/v1/auth/blogs/comment/${blog?._id}`,commentData
    );
    if (response.data.message) {
      setComment("");
      refetch();
    }
  };
   if (bLoading) {
     return <MidSpinner />;
   }
  return (
    <div className="my-36 default-container">
      <div>
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-2">{blog.date}</p>
        <p className="prose">{blog?.content}</p>
        <div className="my-5">
          <p>Comments</p>
          {blog.comments.map((com) => (
            <div key={com.index} className="bg-slate-400 my-5 p-3">
              <h1>{com.name}</h1>
              <p>{com.comment}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Add a comment</p>
          <div className="p-5">
            <textarea
              rows="4"
              cols="50"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="border p-2"
            ></textarea>
            <button
              type="submit"
              onClick={handleCommentSubmit}
              className="bg-blue-500 block text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
