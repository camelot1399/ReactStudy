import React, {useState, useCallback, useEffect} from "react";
import {Loader} from "../UI/Loader";
import {Error} from "../UI/Error";
import Card from "../card/Card";
import {List} from "../list/List";
import Button from "@mui/material/Button";


export const FromAPI = () => {
    // https://jsonplaceholder.typicode.com/todos/1
    // https://reqres.in/api/users
    const API_URL = 'https://reqres.in/api/users?page=';

    const initialState = {
        page: 1,
        per_page: 6,
        total: 0,
        total_pages: 0,
        data: [],
        support: {},
    }

    const [users, setUsers] = useState(initialState);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const resetUsers = () => {
        setUsers(initialState);
    }

    const resetDataUsers = () => {
        setUsers({
            ...users,
            data: [],
        })
    }

    const fetchMoreLoadUsers = async (page = 1) => {

        setError(undefined);
        setLoading(true);

        try {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`)

            if (!response.ok) {
                throw new Error('user is not loading...');
            }

            const result = await response.json();

            setUsers({
                ...users,
                ...users.data,
                ...result.data,
            });


        } catch (e) {
            setError(e);
        }

        setLoading(false);
    }

    const fetchUsers = async (page = 1) => {

        setError(undefined);
        setLoading(true);

        try {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`)

            if (!response.ok) {
                throw new Error('user is not loading...');
            }

            const result = await response.json();

            setUsers(result);


        } catch (e) {
            setError(e);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const loadMore = () => {
        if (users.page + 1 <= users.total_pages) {
            fetchMoreLoadUsers(users.page + 1);
        }
    }

    return (
        <div>
            <h1>fromAPI</h1>

            {
                isLoading && <Loader />
            }

            {
                error && <Error reload={() => {
                    resetUsers();
                    fetchUsers();
                }}/>
            }

            {
                !isLoading && !error && (
                    users?.data?.map(user => (<Card key={user.id} user={user}/>))
                )
            }

            <br/>
            <br/>

            {Array.from({length: users.total_pages}).map((_,index) => (<button onClick={() => {
                resetDataUsers();
                fetchUsers(index + 1);
            }}
            >{index + 1}</button>))}

            <br/>
            <br/>
            <br/>

            <Button
                variant="contained"
                onClick={loadMore}
            >Load more...</Button>
        </div>
    );
};