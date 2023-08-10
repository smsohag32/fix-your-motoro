"use client"
import React, { useState } from 'react';
import NewsModal from './NewsModal'; 
import './news.css';
import newsData from './news.json'; // Import the JSON data

function RecenNews() {
  const articles = newsData.articles; // Access the articles array
  const [selectedArticle, setSelectedArticle] = useState(null);


  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      
      <h1>Motor Servicing News</h1>
      <div className="container">
        {articles.map((article) => (
          <div key={article.id} 
          className="card" 
          onClick={() => openModal(article)}
          >
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

 export default RecenNews;
