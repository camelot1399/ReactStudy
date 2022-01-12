import React from "react";
import { Button } from "..";
import style from './style.module.scss';

export const Message = ({text, children, click}) => {
    return (
        <div className={style.message}>
            <div>Вот тут я получаю пропсы: <span>{text}</span></div>
            <div>{children}</div>
            <Button black click={click}>Кнопка, нажми наменя и отработает функция, переданная из App</Button>
            <Button white click={click}>Кнопка, белая</Button>
        </div>
    );
};