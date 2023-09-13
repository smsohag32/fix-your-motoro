import React, { useEffect, useRef, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

function NotificationDisplay({ socket, username, room, notification, setNotification }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);

  const sendMessage = async () => {
    setNotification(0);
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
      socket.emit('get_conversation', room);
    }
  };

  const updateMessageList = (message) => {
    setMessageList((list) => [...list, message]);
    if (message.author !== username) {
      setNotification((notify) => notify + 1);
    }
  };

  useEffect(() => {
    // Fetch previous conversation messages when the component mounts
    socket.emit('get_conversation', room);

    socket.on('receive_message', (data) => {
      updateMessageList(data);

      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      }
    });

    socket.on('previous_conversation', (data) => {
      setConversation(data);
    });

    return () => {
      socket.off('receive_message');
      socket.off('previous_conversation');
    };
  }, [socket, username, room]);

  return (
    <div className=" w-screen h-screen items-center justify-center bg-gray-100">
      
      <div className="bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
      <div className="bg-white rounded-b-lg">
          <div className=" items-center border-t p-4 rounded-lg shadow-lg w-full h-full max-w-screen-md">
          <h2 className="mt-12 text-lg font-semibold mb-3">Admin Push the Notificatoin </h2>
            <input
              className="mb-5 flex-grow p-2 w-full outline-none rounded-l-lg"
              type="text"
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                event.key === 'Enter' && sendMessage();
              }}
            />
            <button
              className="px-4 py-2 bg-green-700 text-white rounded-r-lg hover:bg-green-900"
              onClick={sendMessage}
            >
              Publish the Notification
            </button>
            {notification > 0 && (
              <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1">
                {notification}
              </span>
            )}
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
          <p className="text-xl text-white font-semibold">FYM Notification</p>
        </div>
        <div className="flex-grow p-4">
          <ScrollToBottom
            className="overflow-y-auto max-h-[70vh]" // Adjust the max height as needed
            ref={messageContainerRef}
          >
            {conversation.map((messageContent, index) => (
              <div
                className={`flex ${
                  username === messageContent.author
                    ? 'justify-start'
                    : 'justify-start'
                } mb-2`}
                key={index}
              >
                <div
                  className={`p-2 rounded ${
                    username === messageContent.author
                      ? 'bg-green-300 text-right'
                      : 'bg-gray-300 text-left'
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
     
      </div>
    </div>
  );
}

export default NotificationDisplay;
