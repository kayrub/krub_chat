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
    let sameUser;
    if (!chats.length) sameUser = false;
    else { chats[chats.length - 1].user === user ? sameUser = true : sameUser = false }
    const date = new Date(Date.now());
    const convertedDate = 
          ""+(date.getMonth()+1)+
          "/"+date.getDate()+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds();
    const chatDetail = {
      user: user,
      message : message,
      date: convertedDate,
      same: sameUser
    }
    setChats(chats.concat(chatDetail));
    setMessage('');
    console.log(chats);
  }

  return (
    <div className="App">
      <div className="App-Chat-Container">
        <header className="App-Chat-Header">
        krub chat
        </header>
        <div className='App-Chat'>
          <Chat 
            chats={chats} 
            user={user}
          />
          <div className="App-Input-Container">
            <input className='App-Input' type='text' placeholder='speak your mind' autoFocus onChange={messageHandler} onKeyPress={handleKeyPress} value={message}></input>
            <button className='App-Button' onClick={submitMessage}>S E N D</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
