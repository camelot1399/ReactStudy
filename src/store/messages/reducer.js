import {ADD_MESSAGE} from "./actions";


const initialState = {
    messages: [],
}

export const MessagesReducer = (state = initialState, action) => {

    switch (action?.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            }
        }
        default: {
            return state;
        }
    }

}