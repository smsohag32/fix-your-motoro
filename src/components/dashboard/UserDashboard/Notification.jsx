"use client"
import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

const socket = io.connect('https://steep-mountainous-avatar.glitch.me');

function Notification() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);
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
  }, []); // Removed 'socket' and 'username' from the dependency array

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
            </div>
          ))}
        </ScrollToBottom>
      </div>
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
}

export default Notification;