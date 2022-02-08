import { CHANGE_CHECKBOX_PROFILE } from '.';
const initialState = {
    status: true
}

export const profileReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHANGE_CHECKBOX_PROFILE: {
            console.log('CHANGE_CHECKBOX_PROFILE', CHANGE_CHECKBOX_PROFILE)
            return {
                ...state,
                status: action.payload.status
            }
        }
        default: {
            return state
        }
    }
}