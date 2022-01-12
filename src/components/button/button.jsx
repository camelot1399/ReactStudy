import React from "react";
import style from './style.module.scss';

export const Button = ({children, click, type, black, white}) => {
    return (
        <button
            className={[
                style.button, 
                black && [style.button__black],
                white && [style.button__white],
            ].join(" ")}
            onClick={click}
            type={type}
        >{children}</button>
    );
};