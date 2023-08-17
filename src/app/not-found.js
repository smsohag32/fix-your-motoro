// pages/404.js
"use client"
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="error-container">
      <Image
        src="/https://i.ibb.co/C5YSgLy/image.png"
        alt="Error"
        className="error-image"
      />
      <p>Oops! The page you're looking for was not found.</p>
      <Link href="/">
        <a className="home-button">Go to Home</a>
      </Link>

      <style jsx>{`
        .error-container {
          text-align: center;
          padding: 20px;
        }
        .error-image {
          max-width: 100%;
          height: auto;
        }
        .home-button {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: #ffffff;
          border-radius: 5px;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
