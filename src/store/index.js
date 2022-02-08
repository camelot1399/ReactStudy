import { createStore } from 'redux';
// import { todoReducer } from './todo';
import { profileReducer } from './profile';

export const store = createStore(
    // todoReducer,
    profileReducer,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);