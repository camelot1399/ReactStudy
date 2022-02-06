import {
    ADD_TODO,
    CHANGE_TODO_STATUS,
    REMOVE_TODO, SET_FILTER_BY_STATUS
} from ".";

const initialState = {
    list: [],
    filter: {
        status: undefined,
        search: '',
        sortBy: undefined,
    }
};

export const todoReducer = (state = initialState, action) => {

    switch (action?.type) {
        case ADD_TODO: {
            return {
                ...state,
                list: [
                    action.payload,
                    ...state.list,
                ]
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            }
        }
        case CHANGE_TODO_STATUS: {
            const copyList = [...state.list];
            const findIndex = copyList.findIndex(({id}) => action.payload.id === id);

            if (findIndex === -1) {
                return state;
            }

            copyList[findIndex] = {
                ...copyList[findIndex],
                ...action.payload
            }
            return {
                ...state,
                list: copyList
            }
        }
        case SET_FILTER_BY_STATUS: {
            console.log('filter', action.payload)
            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload
                }
            }
        }
        default: {
            return state;
        }
    }

}