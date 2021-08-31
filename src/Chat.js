import React, { useState } from 'react';

const Chat = ({chats, user}) => {
  const [showDate, setShowDate] = useState('');
  let chatHeader = 'Chat-Header';
  let chatMessage = 'Chat-Message';
  let chatDate = 'Chat-Date';
  
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
          <div className='Chat-Message-Container'>
            <div className={chatMessage}
            onMouseEnter={() => setShowDate(chat.message)}
            onMouseLeave={() => setShowDate(false)}>
              {chat.message}
            </div>
            <div className={chatDate}>
              {showDate === chat.message ? chat.date : ''}
            </div>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Chat;