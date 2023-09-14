"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";

const BlogDetailPage = ({ params }) => {
  const [loading, setLoading] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useAuth();

  // console.log(blog);
  // `https://fya-backend.vercel.app/api/v1/auth/blogs/${params.id}`;
  const {
    data: blog,
    refetch,
    isLoading: bLoading,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/blogs/${params.id}`
      );
      return res.data;
    },
  });

  const handleCommentSubmit = async () => {
    const commentData = {
      user_name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      comment: comment,
    };
    const response = await axios.patch(
      `https://fya-backend.vercel.app/api/v1/auth/blogs/comment/${blog?._id}`,
      commentData
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
    <div className="my-5 default-container">
      <PageTitle title="Read Our Blog" />
      <div>
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-2">{blog.date}</p>
        <p className="prose">{blog?.content}</p>
        <div>
          <p>Add a comment</p>
          <div className="py-5">
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
              className="block primary-btn"
            >
              Add Comment
            </button>
          </div>
        </div>
        <div className="my-5">
          <p>Comments</p>
          {blog.comments.map((com) => (
            <div
              key={com.index}
              className="bg-slate-50 primary-shadow my-5 p-3"
            >
              <h1 className="text-lg font-medium mb-2">
                {com.name ? com.name : com.user_name}
              </h1>
              <p className="text-md text-slate-500">{com.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
