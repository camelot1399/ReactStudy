export const ADD_MESSAGE = 'ADD_MESSAGE';


export const addNewMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});