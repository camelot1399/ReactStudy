import React from "react";

export const Input = ({type, onChange, value}) => {
    return (
        <input 
            type="text" 
            value={value}
            onChange={onChange}
        />
    );
};