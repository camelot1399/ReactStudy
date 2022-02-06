import { createStore, combineReducers } from 'redux';
import { todoReducer } from './todo';
import { profileReducer } from './profile';
import {projectReducer} from "./project/reducer";
import {RoomsReducer} from "./rooms";
import {MessagesReducer} from "./messages";

export const store = createStore(
    combineReducers({
        todo: todoReducer,
        profile: profileReducer,
        // projects: projectReducer,
        rooms: RoomsReducer,
        messages: MessagesReducer,
    }),
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);