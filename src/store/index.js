import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { todoReducer } from './todo';
import { profileReducer } from './profile';
import {RoomsReducer} from "./rooms";
import {MessagesReducer} from "./messages";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        todo: todoReducer,
        profile: profileReducer,
        rooms: RoomsReducer,
        messages: MessagesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);