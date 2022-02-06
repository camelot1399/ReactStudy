import {ADD_TO_ROOMS} from "./actions";


const initialState = {
    rooms: [
        {id: 1, name: 'room1'},
        {id: 2, name: 'room2'},
        {id: 3, name: 'room3'},
    ]
};

export const RoomsReducer = (state = initialState, action) => {

    switch (action?.type) {
        case ADD_TO_ROOMS: {
            return {
                ...state,
                rooms: [
                    ...state.rooms,
                    action.payload
                ]
            }
        }
        default: {
            return state;
        }
    }

}