'use client';
import io from 'socket.io-client';
import { useState, useRef, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
const socket = io.connect('https://steep-mountainous-avatar.glitch.me');

// socket io server deploy app link: https://glitch.com/edit/#!/steep-mountainous-avatar
// socket io server deploy live link: https://steep-mountainous-avatar.glitch.me

function Notification() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);
  const room = 500;
  const username = 'Adm';

  // Function to get the conversation messages from the server
  const getConversation = () => {
    socket.emit('get_conversation', room);
  };

  useEffect(() => {
    // Fetch the conversation messages when the component mounts
    getConversation();

    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);

      // Scroll to the bottom of the message container when a new message is received.
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
  }, [socket, username]);

  const sendMessage = async () => {
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

  return (
 
      <div className="mt-12 bg-white rounded-lg shadow-lg w-full h-full max-w-screen-md">
        <div className="bg-gradient-to-r from-green-500 to-green-900 p-4 rounded-t-lg">
          <p className="text-xl text-white font-semibold">Notification for you from FYM Admin</p>
        </div>
        <div className="flex-grow p-4">
          <ScrollToBottom  className="overflow-y-auto max-h-[70vh]"  ref={messageContainerRef}>
            {conversation.map((messageContent, index) => (
              <div
                className={`flex ${
                  username === messageContent.author ? 'justify-start' : 'justify-start'
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
      </div>
    
  );
}

export default Notification;
