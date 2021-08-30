import './App.css';
import { useState, useEffect} from 'react';
import Chat from './Chat.js';


function App() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    let newUser = prompt(`Your name, M'gamer?`)
    while (!newUser || user === newUser) {
      newUser = prompt(`Someone has stolen your name, try again my friend`)
    }
    setUser(newUser);
  }, []);

  const messageHandler = (e) => {
    setMessage(e.target.value);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') submitMessage();
  }
  const submitMessage = () => {
    const chatDetail = {
      user: user,
      message : message,
      date: Date.now()
    }
    setChats(chats.concat(chatDetail));
    setMessage('');
  }

  return (
    <div className="App">
      <header className="App-header">
      Krub Chat
      </header>
      <div className='App-Chat'>
        <Chat 
          chats={chats} 
        />
        <input type='text' placeholder='speak your mind' autoFocus onChange={messageHandler} onKeyPress={handleKeyPress} value={message}></input>
        <button onClick={submitMessage}></button>
      </div>

    </div>
  );
}

export default App;
