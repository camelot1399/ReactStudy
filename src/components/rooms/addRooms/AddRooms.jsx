import { Input } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../..";
import style from './style.module.scss';

export const AddRooms = ({addToChatList}) => {

    const [input, setInput] = useState('');
    const [showForm, setShowForm] = useState(false);
    const changeInput = (e) => {
        setInput(e);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToChatList(input);
        setInput('');
    }

    const handleShowForm = () => {
        console.log('handleShowForm');
        setShowForm(!showForm);
    }

    return (
        <div className={style.roomsBlock}>
            <Button click={handleShowForm}>add new room</Button>
            {showForm && (
                <form 
                    onSubmit={(e) => onSubmit(e)}
                    className={style.roomsForm}
                >
                    <label htmlFor="">Добавление новой комнаты</label>
                    <Input value={input} type="text" onChange={(e) => changeInput(e.target.value)}/>
                    <Button>добавить</Button>
                </form>
            )}

            
        </div>
    );
};