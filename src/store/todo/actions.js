export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
export const SET_FILTER_BY_STATUS = 'SET_FILTER_BY_STATUS';

export const setFilterByStatus = (filter) => ({
    type: SET_FILTER_BY_STATUS,
    payload: filter
})
export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    payload: todo
});

export const changeTodoStatusActions = (status) => ({
    type: CHANGE_TODO_STATUS,
    payload: status
})