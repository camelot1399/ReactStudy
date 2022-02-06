import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Messages } from "../messages";
import { RoomsList, AddRooms } from "../rooms";
import { useSelector, useDispatch } from 'react-redux'
import {addNewRoom, getRooms} from "../../store/rooms";
import {addNewMessage, getMessages} from "../../store/messages";
export const Rooms = () => {

    const chatList = useSelector(getRooms);
    const messageList = useSelector(getMessages);

    const dispatch = useDispatch();

    const { roomId } = useParams();

    const addToChatList = (roomName) => {
        dispatch(addNewRoom({id: new Date(), name: roomName}))
    }
  
    const addMessage = ({text, author}) => {
      dispatch(addNewMessage(
          {id: Date.now(), author: author, text: text}
      ));
    };

    const checkRoom = () => {
        return chatList.filter(el => el.id === parseInt(roomId));
    }

    useEffect(() => {
        if (messageList.length > 0 &&
            messageList[messageList.length - 1].author === 'user') {
                setTimeout(() => {
                    dispatch(addNewMessage(
                        {author: 'bot', text: 'Привет, я бот, сообщение автоматическое!!!!'}
                    ));
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

                {checkRoom().length > 0 ? <Messages addMessage={addMessage} messageList={messageList}/>
                : 
                <Navigate replace to="/" />
                }

            </div>
        </div>
    );
};