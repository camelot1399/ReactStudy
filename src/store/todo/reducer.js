import { 
    ADD_TODO, 
    CHANGE_TODO_STATUS, 
    REMOVE_TODO 
} from ".";

const initialState = {
    list: [],
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

            console.log('copyList', copyList[findIndex]);
            console.log('action', action.payload);
            
            copyList[findIndex] = {
                ...copyList[findIndex],
                ...action.payload
            }
            return {
                ...state,
                list: copyList
            }
        }
        default: {
            return state;
        }
    }

}