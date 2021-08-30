import './App.css';
import React, { useState } from 'react';


function App() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState('');
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   getChats();
  // });

  const messageHandler = (e) => {
    setMessage(e.target.value);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') submitMessage();
  }
  const submitMessage = () => {
    setChats(chats.concat(message));
    setMessage('');
  }

  return (
    <div className="App">
      <header className="App-header">
      Krub Chat
      </header>
      <div>
        {chats.map((chat, idx) => (
          <div key={idx}>{chat}</div>
        ))}
      </div>
      <input type='text' placeholder='speak your mind' autoFocus onChange={messageHandler} onKeyPress={handleKeyPress} value={message}></input>
      <button onClick={submitMessage}></button>
    </div>
  );
}

export default App;
