export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';


export const addNewMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});

export const removeMessage = (message) => ({
    type: REMOVE_MESSAGE,
    payload: message
});