import React from 'react';
import Chat from './Chat';

const ChatList = ({chats}) => {
  return (
    <div>
      {chats.map((chat) => (
        <Chat chat={chat} />
      ))}
    </div>
  )
}

export default ChatList;