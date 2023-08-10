import React from 'react';
import './news.css';
import newsData from './news.json'; // Import the JSON data

function RecentNews() {
  const articles = newsData.articles; // Access the articles array

  return (
    <div className="App">
      
      <h1>Motor Servicing News</h1>
      <div className="container">
        {articles.map((article) => (
          <div key={article.id} className="card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentNews;
