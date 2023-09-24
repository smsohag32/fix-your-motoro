import Blog from "@/components/PagesSection/Blog/Blog";
import React from "react";

export const metadata = {
  title: "FYM | Blogs",
  description: "FYM Blogs",
};
const BlogsPage = () => {
  return (
    <div className="default-container">
      <Blog />
    </div>
  );
};

export default BlogsPage;
