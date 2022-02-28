import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Messages } from "../messages";
import { RoomsList, AddRooms } from "../rooms";
import { useSelector, useDispatch } from 'react-redux'
import {addNewRoom, getRooms} from "../../store/rooms";
import {getMessages} from "../../store/messages";
export const Rooms = () => {

    const chatList = useSelector(getRooms);
    const messageList = useSelector(getMessages);
    const dispatch = useDispatch();
    const { roomId } = useParams();

    const addToChatList = (roomName) => {
        dispatch(addNewRoom({id: new Date(), name: roomName}))
    }

    const checkRoom = () => {
        return chatList.filter(el => el.id === parseInt(roomId));
    }

    return (
        <div>
            <h1>Home</h1>

            <div className='container'>
                
                <RoomsList chatList={chatList}>
                    <AddRooms addToChatList={addToChatList} />
                </RoomsList>

                {checkRoom().length > 0 ? <Messages messageList={messageList}/>
                : 
                <Navigate replace to="/" />
                }

            </div>
        </div>
    );
};