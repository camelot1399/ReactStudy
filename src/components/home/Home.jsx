import React, { useEffect, useState } from "react";
import { Message, Form, Rooms } from '../';
import { AddRooms } from "../rooms/addRooms/AddRooms";

export const Home = () => {

    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([
      {id: 1, name: 'room1'},
      {id: 2, name: 'room2'},
      {id: 3, name: 'room3'},
    ]);

    const addToChatList = (roomName) => {
        
        console.log('roomName', roomName);
        setChatList([
            ...chatList,
            {id: new Date(), name: roomName}
        ]);
    }
  
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
        <div>
            <h1>Home</h1>

            <div className='container'>
                
                <Rooms chatList={chatList}>
                    <AddRooms addToChatList={addToChatList} />
                </Rooms>

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
};