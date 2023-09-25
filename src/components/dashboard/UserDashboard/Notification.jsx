"use client";
import React, { useState, useRef, useEffect } from "react";
import io from "socket.io-client";
const socket = io("https://steep-mountainous-avatar.glitch.me");

function Notification() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const room = 500;
  const username = "Admin";
  useEffect(() => {
    socket.emit("join_room", { room });

    socket.on("previous_conversation", (data) => {
      setConversation(data);
    });

    socket.on("receive_message", (data) => {
      // Update the conversation with the new message
      setConversation((prevConversation) => [...prevConversation, data]);
    });

    return () => {
      socket.off("previous_conversation");
      socket.off("receive_message");
    };
  }, [room]);

  return (
    <div className="mt-12 bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
      <div className="bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
        <p className="text-xl text-white font-semibold">
          Notification for you from FYM Admin
        </p>
      </div>
      <div className="flex-grow p-4">
        {conversation
          .slice()
          .reverse()
          .map((message, index) => (
            <div
              className={`mb-2 p-2 rounded-lg ${
                username === message.user
                  ? "bg-green-700 hover:bg-green-500 text-left"
                  : "bg-green-600 hover-bg-green-400 text-left"
              }`}
              key={index}
            >
              <div className="text-sm text-white mb-1">
                #{conversation.length - index}
              </div>
              <div className="text-white text-xs mb-1">{message.time}</div>
              <div className="text-white text-xs mb-1">{message.user}</div>
              <div className="text-white">{message.text}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Notification;
