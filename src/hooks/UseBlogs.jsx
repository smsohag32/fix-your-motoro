import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogs = () => {
  const {
    data: blogs,
    refetch,
    isLoading: bLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://fya-backend.vercel.app/api/v1/auth/blogs`
      );
      return res.data;
    },
  });
  return { blogs, bLoading, refetch };
};

export default useBlogs;

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useBlogs = () => {
//   const {
//     data: blogs,
//     refetch,
//     isLoading: bLoading,
//   } = useQuery({
//     queryKey: ["blogs"],
//     queryFn: async () => {
//       const res = await axios.get(
//         `https://fya-backend.vercel.app/api/v1/auth/blogs`
//       );
//       const blogData = res.data;
//       console.log("Api data", blogData);

//       // Assuming you have user-specific like data available (e.g., userLikedBlogs)
//       // Set the blog.liked property based on user's like status
//       const userLikedBlogs = getUserLikedBlogs(); // Replace this with your user-specific data

//       const updatedBlogs = blogData.map((blog) => ({
//         ...blog,
//         liked: userLikedBlogs.includes(blog._id),
//       }));

//       return updatedBlogs;
//     },
//   });

//   return { blogs, bLoading, refetch };
// };

// export default useBlogs;
