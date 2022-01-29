import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Messages } from "../messages";
import { RoomsList } from "../rooms";
import { AddRooms } from "../rooms/addRooms/AddRooms";

export const Rooms = () => {

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
                
                <RoomsList chatList={chatList}>
                    <AddRooms addToChatList={addToChatList} />
                </RoomsList>

                <Messages addMessage={addMessage} messageList={messageList}/>
            </div>
        </div>
    );
};