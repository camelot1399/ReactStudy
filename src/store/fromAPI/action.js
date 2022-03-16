import {Error} from "../../components/UI/Error";

export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_DATA = 'SET_DATA';


export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export const setData = (data) => ({
    type: SET_DATA,
    payload: data
});

const USERS_API = `https://reqres.in/api/users?page=1`;

export const getUsersWithThunk = (page = 1) => async (dispatch) => {

    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));


    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);

        if (!response.ok) {
            throw new Error('user is not loading...');
        }

        const result = await response.json();

        dispatch(setData(result));


    } catch (e) {
        dispatch(setError(e));
    }

    dispatch(setLoading(false));
}