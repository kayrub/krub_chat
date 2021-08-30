import './App.css';
import { useState, useEffect} from 'react';
import Chat from './Chat.js';


function App() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');


  useEffect(() => {
    setChats([
      {
        user: 'Bob',
        message: 'what is your problem?',
        date: Date.now(),
        same: false
      },
      {
        user: 'Jeff',
        message: 'If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one',
        date: Date.now(),
        same: false
      },
      {
        user: 'Jake',
        message: 'By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.',
        date: Date.now(),
        same: false
      },
      {
        user: 'Bob',
        message: 'This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this',
        date: Date.now(),
        same: false
      }, {
        user: 'Bob',
        message: 'keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.',
        date: Date.now(),
        same: true
      }
      , {
        user: 'Jeff',
        message: 'If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-',
        date: Date.now(),
        same: false
      }
  ])
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
    const chatDetail = {
      user: user,
      message : message,
      date: Date.now(),
      same: sameUser
    }
    setChats(chats.concat(chatDetail));
    setMessage('');
    console.log(chats);
  }

  return (
    <div className="App">
      <header className="App-Header">
      Krub Chat
      </header>
      <div className='App-Chat'>
        <Chat 
          chats={chats} 
          user={user}
        />
        <input type='text' placeholder='speak your mind' autoFocus onChange={messageHandler} onKeyPress={handleKeyPress} value={message}></input>
        <button onClick={submitMessage}></button>
      </div>

    </div>
  );
}

export default App;
