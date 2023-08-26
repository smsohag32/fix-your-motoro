
"use client";
import React, { useState } from "react";
import NewsModal from "./NewsModal";
import newsData from "./news.json"; // Import the JSON data
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
function RecentNews() {
  const articles = newsData.articles; // Access the articles array
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="py-12 default-container">
      <SectionTitle
        title="Special News"
        subTitle="Recent motor servicing news and blogs"
      />
      <div className="grid grid-cols-1 gap-6 my-12 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col items-center pb-5 transition-all duration-500 transform cursor-pointer primary-shadow hover:scale-95"
            onClick={() => openModal(article)}
          >

            <Image
              src={article.image}
              alt="news"
              width={280}
              className="object-cover w-full h-44"
              height={280}
            />
            <h2 className="px-3 mt-4 text-lg font-semibold tracking-wider md:text-xl">
              {article.title}
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
