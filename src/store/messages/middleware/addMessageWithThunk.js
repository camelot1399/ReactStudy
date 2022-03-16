import {addNewMessage} from "../actions";

export const addMessageWithThunk = ({author, text}) => (dispatch) => {
    console.log('thunk')

    dispatch(addNewMessage(
        {id: Date.now(), author: author, text: text}
    ));

    if (author !== 'bot') {
        const botMessage = {id: Date.now(), author: 'bot', text: 'Привет, я бот, сообщение автоматическое!!!!'};

        setTimeout(() => {
            dispatch(addNewMessage(botMessage));
        }, 2000)
    };
};