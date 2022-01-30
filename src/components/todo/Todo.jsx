import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, CHANGE_TODO_STATUS, REMOVE_TODO } from "../../store/todo";

export const Todo = () => {
    const [value, setValue] = useState();

    const dispatch = useDispatch();
    const list = useSelector((state) => state.list)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        dispatch({
            type: ADD_TODO,
            payload: {
                id: Date.now(),
                text: value,
                status: false,
            }
        })
        console.log('send');
    }

    const onChangeStatus = (todoId) => (event) => {
        dispatch({
            type: CHANGE_TODO_STATUS,
            payload: {
                id: todoId,
                status: event.target.checked
            }
        })
    }

    const onRemove = (id) => {
        dispatch({
            type: REMOVE_TODO,
            payload: id
        })
    }

    return (
        <div>
            <h1>Todo</h1>

            <form onSubmit={onSubmit}>
                <input type="text" onChange={(event) => onChange(event)} value={value} />
                <button>send</button>
            </form>
            
            <br />

            <ul>
                {list.map(el => {
                    return <li key={el.id}>
                                <input 
                                    type="checkbox" 
                                    onChange={onChangeStatus(el.id)} 
                                    checked={el.status}
                                /> {el.text}
                                <button onClick={() => onRemove(el.id)}>remove</button>
                            </li>
                })}
            </ul>

        </div>
    )
}