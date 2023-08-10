"use client"
import React, { useState } from 'react';
import NewsModal from './NewsModal'; 
import './news.css';
import newsData from './news.json'; // Import the JSON data

<<<<<<< HEAD
function RecentNews() {
=======
function RecenNews() {
>>>>>>> dc2972497bc84bc3b95491d1427c4db108b5af8c
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

<<<<<<< HEAD
export default RecentNews;
=======
 export default RecenNews;
>>>>>>> dc2972497bc84bc3b95491d1427c4db108b5af8c
