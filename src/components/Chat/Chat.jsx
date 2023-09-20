// Chat.js
"use client";
import React, { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server URL

function Chat({ username, room }) {
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
    <div className="flex flex-col h-screen">
      <div className="bg-gradient-to-r from-green-500 to-green-900 text-white p-4">
        <p className="text-xl font-semibold">FYM Chat</p>
      </div>
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
      <div className="bg-white border-t p-4">
        <div className="flex">
          <input
            className="flex-grow p-2 outline-none rounded-l-lg"
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
            className="px-4 py-2 bg-green-700 text-white rounded-r-lg hover:bg-green-900"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
