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
    <div className="default-container py-12">
      <SectionTitle
        title="Special News"
        subTitle="Recent motor servicing news and blogs"
      />
      <div className="grid grid-cols-1 my-12 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="cursor-pointer flex flex-col primary-shadow hover:scale-95 duration-500 pb-5 transition-all transform items-center"
            onClick={() => openModal(article)}
          >
            <Image
              src={article.image}
              alt="news"
              width={280}
              className="w-full h-44 object-cover"
              height={280}
            />
            <h2 className="text-lg px-3 font-semibold tracking-wider mt-4 md:text-xl">
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
