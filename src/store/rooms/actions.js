export const ADD_TO_ROOMS = 'ADD_TO_ROOMS';
export const REMOVE_ROOM = 'REMOVE_ROOM';

export const addNewRoom = (room) => ({
    type: ADD_TO_ROOMS,
    payload: room
});

export const removeRoom = (room) => ({
    type: REMOVE_ROOM,
    payload: room
});