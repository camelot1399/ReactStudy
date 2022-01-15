import React, { useEffect, useState } from 'react';
import {Message} from './components';
import './App.css';
import { Form } from './components/form';

function App() {
 
  const [messageList, setMessageList] = useState([]);

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
      <h1>Главная страница</h1>

      <Form addMessage={addMessage}/>

      {messageList.map(item => {
        return <Message message={item} />
      })}

      {!messageList.length && (<div>сообщений нет</div>)}

    </div>
  );
}

export default App;
