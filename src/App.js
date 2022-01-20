import React, { useEffect, useState } from 'react';
import { Message, Form, Rooms } from './components';

import './App.css';

function App() {
 
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    {id: 1, name: 'room1'},
    {id: 2, name: 'room2'},
    {id: 3, name: 'room3'},
  ]);

  const addMessage = ({text, author}) => {
    setMessageList([
      ...messageList,
      {id: messageList.length + 1, author: author, text: text}  
    ])
  }

  useEffect(() => {
    if (messageList.length > 0 &&
        messageList[messageList.length - 1].author === 'user') {
          setTimeout(() => {
            addMessage({author: 'bot', text: 'Привет, я бот, сообщение автоматическое!!!!'});
          }, 1500)
    }
  }, [messageList]);

  return (
    <div className="App">
      <h1>Чат</h1>

      <div className='container'>
        <Rooms chatList={chatList}/>

        <div className='content'>
          <Form addMessage={addMessage}/>

          {messageList.map(item => {
            return <Message message={item} key={item.id} />
          })}

          {!messageList.length && (<div>сообщений нет</div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
