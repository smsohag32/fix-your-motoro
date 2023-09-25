import React, { useEffect, useState, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';

const socket = io('https://steep-mountainous-avatar.glitch.me');

function NotificationDisplay({ username, room }) {

  const [currentMessage, setCurrentMessage] = useState("");
  const [conversation, setConversation] = useState([]);


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


  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const currentDate = new Date().toLocaleDateString();
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
    <div className="items-center justify-center bg-gray-100">

      <div className="bg-white rounded-lg shadow-lg w-full h-full">
        <div className="bg-white rounded-b-lg">
          <div className=" items-center border-t p-4 rounded-lg shadow-lg w-full h-full">
            <h2 className="mt-6 text-lg font-semibold mb-3">Publish the Notification for FYM Users</h2>
            <input
              className="flex-grow primary-input"
              type="text"
              placeholder="Fix Your Motoro Notification... "
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="px-4 py-2 mt-8 bg-[#1b630d] text-white rounded-r-lg hover:bg-[#379a22]"
              onClick={sendMessage}
            >
              Publish the Notification
            </button>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-[#389c22] to-[#379a22] p-4 rounded-t-lg">
          <p className="text-xl text-white font-semibold">FYM Notification</p>
        </div>
        <div className="flex-grow p-4">

          {conversation.slice().reverse().map((message, index) => (
            <div
              className={`mb-2 p-2 rounded-lg ${username === message.user
                  ? "bg-gray-300 font-medium cursor-pointer border hover:border-[#379a22] text-left"
                  : "bg-gray-300 font-medium cursor-pointer border hover:border-[#379a22] text-left"
                }`}
              key={index}
            >
              <div className="text-sm mb-1">
                #{conversation.length - index}
              </div>
              <div className=" text-xs mb-1">
                {message.time}
              </div>
              <div className=" text-xs mb-1">
                {message.user}
              </div>
              <div className="">{message.text}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default NotificationDisplay;
