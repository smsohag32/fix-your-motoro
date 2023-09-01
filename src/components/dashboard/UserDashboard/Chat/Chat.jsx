"use client"
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room, notification, setNotification }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    setNotification(0);
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      socket.emit("get_conversation", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);

      if (data.author !== username) {
        setNotification((notify) => {return  notify+1});
      }
    });

    socket.on("previous_conversation", (data) => {
      setConversation(data);
    });

    return () => {
      socket.off("receive_message");
      socket.off("previous_conversation");
    };
  }, [socket, username]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="bg-gradient-to-r from-orange-500 to-orange-900 p-4 rounded-t-lg">
          <p className="text-xl text-white font-semibold">FYM Chat</p>
          {notification || (
            <span className="text-blue-600">{notification} new message</span>
          )}
        </div>
        <div className="flex-grow p-4">
          <ScrollToBottom className="overflow-y-auto max-h-96">
            {conversation.map((messageContent, index) => (
              <div
                className={`flex ${
                  username === messageContent.author
                    ? "justify-end"
                    : "justify-start"
                } mb-2`}
                key={index}
              >
                <div
                  className={`p-2 rounded ${
                    username === messageContent.author
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100 text-left"
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
        <div className="bg-white rounded-b-lg">
          <div className="flex items-center border-t p-4">
            <input
              className="flex-grow p-2 outline-none rounded-l-lg"
              type="text"
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button
              className="px-4 py-2 bg-orange-700 text-white rounded-r-lg hover:bg-orange-900"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
