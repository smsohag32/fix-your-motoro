"use client";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { PiHandsClappingBold } from "react-icons/pi";
import useBlogs from "@/hooks/UseBlogs";
import { useRouter } from "next/navigation";
import MidSpinner from "@/components/Spinners/MidSpinner";
import useAuth from "@/hooks/useAuth";
import { FaRegComment } from "react-icons/fa";

const Blog = () => {
  const { blogs, bLoading, refetch } = useBlogs();
  // console.log(blogs)
  const router = useRouter();
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
                    <button
                      className="text-3xl"
                      onClick={() => handleLike(blog)}
                    >
                      <PiHandsClappingBold />
                    </button>
                    <span>
                      {blog?.likes?.length > 0 ? blog?.likes?.length : ""}
                    </span>
                  </div>
                  <div className=" text-3xl flex items-center gap-3 ">
                    
                    <button
                      className="primary-text"
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
  );
};

export default Blog;
