import React from "react";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import style from './style.module.scss';

export const Message = ({message}) => {

    const {author, text} = message;

    return (
        <div className={style.message}>
            <div>Автор: <span>{author}</span></div>
            <div>
                Сообщение: <span>{text}</span> 
                {author === 'user' && (<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />)}
            </div>
            
        </div>
    );
};