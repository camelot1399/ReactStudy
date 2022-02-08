export const ADD_TO_ROOMS = 'ADD_TO_ROOMS';

export const addNewRoom = (room) => ({
    type: ADD_TO_ROOMS,
    payload: room
});