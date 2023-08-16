"use client"
import React, { useState } from 'react';
import NewsModal from './NewsModal'; 
import './news.css';
import newsData from './news.json'; // Import the JSON data
import Image from 'next/image';


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
    <div className="App ">
      
      <h1 className="">Motor Servicing News</h1>
      <div className="container">
        {articles.map((article) => (
          <div key={article.id} 
          className="card" 
          onClick={() => openModal(article)}
          >
            {/* <Image src={article.image} width={500} height={300} alt="news" style={{ width: '50%' }}/> */}
            <img src={article.image} alt="news" />
            <h2>{article.title}</h2>
            
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
