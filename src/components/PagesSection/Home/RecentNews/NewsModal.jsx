"use client";
import React from 'react';
import Modal from 'react-modal';
import './news.css';
import Image from 'next/image';


const NewsModal = ({ isOpen, closeModal, article }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Article Modal"
    >
      <div className=" modal-content">
      <h1 >Motor Servicing News</h1>
        <h2 className='mb-12 text-3xl'>{article.title}</h2>
        {/* <img src={article.image} alt="news" /> */}
        {/* <Image src={article.image} width={500} height={300} alt="news" style={{ width: '50%' }}/> */}
        <img src={article.image} alt="news" />
        
         <p className='mt-12'>News Details: {article.description}</p>
        <p className='mt-12'>Authore Name: {article.author}</p>
        <p>Publish date: {article.date}</p>
        {/* Add more information */}
      </div>
      <button onClick={closeModal} 
      className=' text-3xl mt-5 '>Close</button>
    </Modal>
  );
};

export default NewsModal;
