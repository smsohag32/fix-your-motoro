import './news.css';
import newsData from './news.json'; // Import the JSON data

function App() {
  const articles = newsData.articles; // Access the articles array

  return (
    <div className="App">
      
      <h1>Motor Servicing News</h1>
      <div className="container">
        {articles.map((article) => (
          <div key={article.id} className="card">
            <img src={article.image} alt="news" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
