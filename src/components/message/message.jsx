import React from "react";
import style from './style.module.scss';

export const Message = ({text}) => {
    return (
        <div className={style.message}>
            {text}
        </div>
    );
};