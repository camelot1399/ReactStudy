import React from "react";
import style from './style.module.scss';

export const Message = ({message}) => {

    const {author, text} = message;

    return (
        <div className={style.message}>
            <div>Автор: <span>{author}</span></div>
            <div>Сообщение: <span>{text}</span></div>
        </div>
    );
};