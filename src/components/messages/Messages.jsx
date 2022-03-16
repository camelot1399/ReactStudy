import React from "react";
import { Form, Message } from "..";

export const Messages = ({messageList}) => {
    return (
        <div className='content'>
            <Form />

            {messageList.map(item => {
                return <Message message={item} key={item.id} />
            })}

            {!messageList.length && (<div>сообщений нет</div>)}
        </div>
    )
}