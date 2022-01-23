import React, { useState, useRef } from "react";
import { Input } from "../UI";
import Button from '@mui/material/Button';

export const Form = ({addMessage}) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        addMessage({author: 'user', text: input});
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