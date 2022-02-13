import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersWithThunk} from "../../store/fromAPI/action";
import {getError, getLoading, getUsers} from "../../store/fromAPI/selector";
import {Loader} from "../../components/UI/Loader";
import {Error} from "../../components/UI/Error";
import Card from "../../components/card/Card";
import Button from "@mui/material/Button";

export const MiddlewareExample = (props) => {

    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const data = useSelector(getUsers);

    useEffect(() => {
        dispatch(getUsersWithThunk());
    }, []);

    return (
        <div>
            <h1>fromAPI</h1>

            {
                isLoading && <Loader />
            }

            {
                error && <Error reload={() => {
                    dispatch(getUsersWithThunk());
                }}/>
            }

            {
                !isLoading && !error && (
                    data?.data?.map(user => (<Card key={user.id} user={user}/>))
                )
            }

            <br/>
            <br/>

            {Array.from({length: data?.total_pages}).map((_,index) => (<button onClick={() => {
                // fetchUsers(index + 1);
                dispatch(getUsersWithThunk(index + 1));
            }}
            >{index + 1}</button>))}

            <br/>
            <br/>
            <br/>

        </div>
    )
}