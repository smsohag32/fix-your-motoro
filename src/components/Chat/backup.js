import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

function Chat({ username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    socket.emit('join_room', { room });

    socket.on('previous_conversation', (data) => {
      setConversation(data);
    });

    socket.on('receive_message', (data) => {
      setConversation((prevConversation) => [...prevConversation, data]);

      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      }
    });

    return () => {
      socket.off('previous_conversation');
      socket.off('receive_message');
    };
  }, [room]);

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      socket.emit('send_message', {
        room,
        author: username,
        message: currentMessage,
      });

      setCurrentMessage('');
    }
  };

  return (
    <div>
      <div ref={messageContainerRef} style={{ height: '300px', overflowY: 'scroll' }}>
        {conversation.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
