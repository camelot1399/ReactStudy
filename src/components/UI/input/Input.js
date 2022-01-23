import React from "react";

export const Input = ({type, onChange, value, thisRef}) => {

    return (
        <input 
            type="text" 
            autoFocus="true"
            value={value}
            onChange={onChange}
            ref={thisRef}
        />
    );
};