'use client'
import React, { useEffect, useState, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

function Notification({ username, room }) {
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    // Function to fetch and update conversation from the server
    const fetchConversation = async () => {
      try {
        const response = await fetch(`http://localhost:3001/conversation/${room}`);
        if (response.ok) {
          const data = await response.json();
          setConversation(data);
          scrollToBottom();
        }
      } catch (error) {
        console.error('Error fetching conversation:', error);
      }
    };

    socket.emit('join_room', { room });
    fetchConversation(); // Fetch initial conversation

    socket.on('receive_message', (data) => {
      setConversation((prevConversation) => [...prevConversation, data]);
      scrollToBottom();
    });

    // Use a timer to periodically fetch new messages (e.g., every 5 seconds)
    const refreshInterval = setInterval(fetchConversation, 5000);

    return () => {
      socket.off('receive_message');
      clearInterval(refreshInterval); // Clear the timer when component unmounts
    };
  }, [room]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };



  return (
 
      <div className="mt-12 bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
        <div className="bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
          <p className="text-xl text-white font-semibold">Notification for you from FYM Admin</p>
        </div>
        <div className="flex-grow p-4">
        <ScrollToBottom
         className="flex-grow overflow-y-auto bg-white p-4"
         ref={messageContainerRef}
       >
         {conversation.map((message, index) => (
           <div
             className={`flex ${
               username === message.user
                 ? "justify-end"
                 : "justify-start"
             } mb-2`}
             key={index}
           >
             <div
               className={`p-2 rounded ${
                 username === message.user
                   ? "bg-blue-100 text-right"
                   : "bg-gray-100 text-left"
               }`}
             >
               <div className="text-gray-600 text-xs mb-1">
                 {message.time}
               </div>
               <div className="text-gray-600 text-xs mb-1">
                 {message.user}
               </div>
               <div className="text-gray-800">{message.text}</div>
             </div>
           </div>
         ))}
       </ScrollToBottom>
        </div>
      </div>
    
  );
}

export default Notification;
