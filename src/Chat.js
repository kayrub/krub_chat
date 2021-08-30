import React from 'react';

const Chat = ({chats}) => {
  return (
    <div>
      {chats.map((chat, idx) => (
          <div key={idx}>{chat.user} {chat.date} {chat.message}</div>
      ))}
    </div>
  )
}

export default Chat;