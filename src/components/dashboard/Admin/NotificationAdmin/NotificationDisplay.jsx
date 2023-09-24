'use client'
import React, { useEffect, useState, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';

const socket = io('https://steep-mountainous-avatar.glitch.me');

function NotificationDisplay({ username, room }) {

  const [currentMessage, setCurrentMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    socket.emit("join_room", { room });

    socket.on("previous_conversation", (data) => {
      setConversation(data);
      scrollToBottom();
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
  }, [room]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const currentDate = new Date().toLocaleDateString(); // Get the current date
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newMessageData = {
        room,
        user: username,
        text: currentMessage,
        time: `${currentDate} ${currentTime}`,
      };

      // Add the new message to the conversation immediately
      setConversation((prevConversation) => [...prevConversation, newMessageData]);

      // Emit the message to the server
      socket.emit("send_message", newMessageData);

      // Clear the input field
      setCurrentMessage("");
    }
  };

  return (
    <div className=" w-screen h-screen items-center justify-center bg-gray-100">
      
      <div className="bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
      <div className="bg-white rounded-b-lg">
          <div className=" items-center border-t p-4 rounded-lg shadow-lg w-full h-full max-w-screen-md">
          <h2 className="mt-12 text-lg font-semibold mb-3">Admin Push the Notification </h2>
          <input
            className="flex-grow p-2 outline-none w-full rounded-l-lg"
            type="text"
            placeholder="Type your message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button
            className="px-4 py-2 mt-8 bg-green-700 text-white rounded-r-lg hover:bg-green-900"
            onClick={sendMessage}
          >
            Publish the Notification 
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
            </div>
          ))}
        </ScrollToBottom>
      </div>
      </div>
    </div>
  );
}

export default NotificationDisplay;
