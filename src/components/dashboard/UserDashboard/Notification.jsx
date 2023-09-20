<<<<<<< HEAD
"use client"
import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

const socket = io.connect('https://steep-mountainous-avatar.glitch.me');
=======
'use client'
import React, { useEffect, useState, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';

// const socket = io('http://localhost:3001'); // Replace with your server URL
const socket = io('https://steep-mountainous-avatar.glitch.me');
>>>>>>> 3fcb5ae79a94dde05c02b5b8c1435ea45a3e12d2

function Notification() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);
<<<<<<< HEAD
  const room = 500;
  const username = 'Adm';

  const getConversation = () => {
    socket.emit('get_conversation', room);
  };

  useEffect(() => {
    getConversation();

    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);

      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      }
=======
const username = "Admin_FYM";
const room = 500;
  useEffect(() => {
    socket.emit("join_room", { room });

    socket.on("previous_conversation", (data) => {
      setConversation(data);
      scrollToBottom();
>>>>>>> 3fcb5ae79a94dde05c02b5b8c1435ea45a3e12d2
    });

    socket.on("receive_message", (data) => {
      // Update the conversation with the new message
      setConversation((prevConversation) => [...prevConversation, data]);
      scrollToBottom();
    });

    return () => {
      socket.off("previous_conversation");
      socket.off("receive_message");
    };
<<<<<<< HEAD
  }, []); // Removed 'socket' and 'username' from the dependency array
=======
  }, [room]);
>>>>>>> 3fcb5ae79a94dde05c02b5b8c1435ea45a3e12d2

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };


  return (
<<<<<<< HEAD
    <div className="mt-12 bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
      <div className="bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
        <p className="text-xl text-white font-semibold">Notification for you from FYM Admin</p>
      </div>
      <div className="flex-grow p-4">
        <ScrollToBottom className="overflow-y-auto max-h-[70vh]" ref={messageContainerRef}>
          {conversation.map((messageContent, index) => (
            <div
              className={`flex ${
                username === messageContent.author ? 'justify-end' : 'justify-start'
              } mb-2`}
              key={index}
            >
              <div
                className={`p-2 rounded ${
                  username === messageContent.author ? 'bg-green-300 text-right' : 'bg-gray-300 text-left'
                }`}
              >
                <div className="text-gray-600 text-xs mb-1">
                  {messageContent.time} - {messageContent.author}
                </div>
                <div className="text-gray-800">{messageContent.message}</div>
              </div>
=======
    <div className="mt-12 bg-white rounded-lg shadow-lg w-full h-screen max-w-screen-md">
      <div className="bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
        <p className="text-xl text-white font-semibold">
          Notification for you from FYM Admin
        </p>
      </div>
      <div className="flex-grow p-4">
        <ScrollToBottom
          className="flex-grow overflow-y-auto bg-white p-4"
          ref={messageContainerRef}
        >
          {conversation.map((message, index) => (
            <div
              className={`mb-2 p-2 rounded-lg ${
                username === message.user
                  ? "bg-green-700 hover:bg-green-500 text-left"
                  : "bg-green-600 hover:bg-green-400 text-left"
              }`}
              key={index}
            >
              <div className="text-sm text-white mb-1">
                #{index + 1}
              </div>
              <div className="text-white text-xs mb-1">
                {message.time}
              </div>
              <div className="text-white text-xs mb-1">
                {message.user}
              </div>
              <div className="text-white">{message.text}</div>
>>>>>>> 3fcb5ae79a94dde05c02b5b8c1435ea45a3e12d2
            </div>
          ))}
        </ScrollToBottom>
      </div>
<<<<<<< HEAD
      <div className="p-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
=======
    </div>

);
>>>>>>> 3fcb5ae79a94dde05c02b5b8c1435ea45a3e12d2
}

export default Notification;