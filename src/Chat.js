import React from 'react';

const Chat = ({chats, user}) => {
  let chatHeader = 'Chat-Header';
  let chatMessage = 'Chat-Message';

  return (
    <div className='Chat-Chat'>
      {chats.map((chat, idx) => {
        if (chat.user === user) {
          chatHeader = 'Chat-User-Header';
          chatMessage = 'Chat-User-Message';
        }
        return (<div key={idx}>
        {!chat.same ? (
            <span className={chatHeader}>{chat.user}</span>
          ) : ( 
            <span className='Chat-Spacer'></span>
          )}
          <span className={chatMessage}>{chat.message}</span>
        </div>)
      })}
    </div>
  )
}

export default Chat;