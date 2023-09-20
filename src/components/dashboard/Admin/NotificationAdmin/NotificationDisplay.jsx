'use client'
import React, { useEffect, useState, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

function NotificationDisplay({ username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
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

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {   
       const currentDate = new Date().toLocaleDateString(); // Get the current date
       const currentTime = new Date().toLocaleTimeString([], {
         hour: '2-digit',
         minute: '2-digit',
       });
       const newMessageData = {
         room,
         author: username,
         message: currentMessage,
         time: `${currentDate} ${currentTime}`,
       };
      // Add the new message to the conversation immediately
      setConversation((prevConversation) => [...prevConversation, newMessageData]);
      // Emit the message to the server
      socket.emit('send_message', newMessageData);
      // Clear the input field
      setCurrentMessage('');
   }
 };


  return (
    <div className=" w-screen h-screen items-center justify-center bg-gray-100">
      
      <div className="bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
      <div className="bg-white rounded-b-lg">
          <div className=" items-center border-t p-4 rounded-lg shadow-lg w-full h-full max-w-screen-md">
          <h2 className="mt-12 text-lg font-semibold mb-3">Admin Push the Notificatoin </h2>
          <input
             className="flex-grow p-2 outline-none rounded-l-lg"
             type="text"
             placeholder="Type your message..."
             value={currentMessage}
             onChange={(e) => setCurrentMessage(e.target.value)}
             onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
           />
           <button
             className="px-4 py-2 bg-green-700 text-white rounded-r-lg hover:bg-green-900"
             onClick={sendMessage}
           >
             Send
           </button>
          
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
          <p className="text-xl text-white font-semibold">FYM Notification</p>
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
    </div>
  );
}

export default NotificationDisplay;
