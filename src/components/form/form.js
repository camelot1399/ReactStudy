import React, { useState, useRef } from "react";
import { Input } from "../UI";
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {addMessageWithThunk} from '../../store/messages'

export const Form = ({addMessage}) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        console.log('mess', {author: 'user', text: input})
        event.preventDefault();
        dispatch(addMessageWithThunk({author: 'user', text: input}));
        setInput('');
        inputRef.current.focus();
    };

    const handleInput = (text) => {
        setInput(text);
    };

    return (
        <form onSubmit={onSubmit} >
            <Input 
                type="text" 
                value={input}
                onChange={(event) => handleInput(event.target.value)}
                thisRef={inputRef}
            />
            <Button type="submit" variant="contained">Отправить сообщение</Button>
        </form>
    );
};