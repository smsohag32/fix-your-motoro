"use client";
import React, { useState } from "react";
import NewsModal from "./NewsModal";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useBlogs from "@/hooks/UseBlogs";
import useAuth from "@/hooks/useAuth";
function RecentNews() {
  // const articles = newsData.articles; // Access the articles array
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (blog) => {
    setSelectedArticle(blog);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

//blog for news start
const { blogs, bLoading, refetch } = useBlogs();
const { user } = useAuth();
// console.log(user)

const handleLike = (blog) => {
  const likeData = {
    user_photo: user?.photoURL,
    user_email: user?.email,
    user_name: user?.displayName,
  };
  fetch(
    `https://fya-backend.vercel.app/api/v1/auth/blogs/like/${blog?._id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeData),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Blog's like status updated successfully:", data);
      refetch();
    })
    .catch((error) => {
      console.error("Error updating workshop status:", error);
    });
};

if (bLoading) {
  return (
    <div className="mt-32 default-container">
      <MidSpinner />
    </div>
  );
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
const displayedBlogs = blogs.slice(0, 3);
//blog for news end
  return (
    <div className="py-12 default-container">
      <SectionTitle
        title="Special News"
        subTitle="Recent motor servicing news and blogs"
      />
      <div className="grid grid-cols-1 gap-6 my-12 md:grid-cols-3">
      {displayedBlogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col items-center pb-5 transition-all duration-500 transform cursor-pointer primary-shadow hover:scale-95"
            onClick={() => openModal(blog)}
          >
            
            <Image
             src={'https://images.unsplash.com/photo-1554666869-04dafcdc7a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'}
             alt="news"
             width={280}
             className="object-cover w-full h-44"
             height={280}
           />
           <h2 className="px-3 mt-4 text-lg font-semibold tracking-wider md:text-xl">
             {blog.title}
           </h2>
     
          </div>
           
        ))}
      </div>
      <NewsModal
        isOpen={selectedArticle !== null}
        closeModal={closeModal}
        article={selectedArticle || {}}
      />
    </div>
  );
}

export default RecentNews;