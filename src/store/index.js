import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { todoReducer } from './todo';
import { profileReducer } from './profile';
import {RoomsReducer} from "./rooms";
import {MessagesReducer} from "./messages";
import {FromAPIReducer} from "./fromAPI/reducer";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        // todo: todoReducer,
        // profile: profileReducer,
        // rooms: RoomsReducer,
        // messages: MessagesReducer,
        users: FromAPIReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);