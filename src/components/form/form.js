import React, { useState } from "react";
import { Button, Input } from "../UI";

export const Form = ({addMessage}) => {
    const [input, setInput] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addMessage({author: 'user', text: input});
        setInput('');
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
            />

            <Button type="submit">Отправить</Button>
        </form>
    );
};