import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredByStatusTodoList} from "../../../store/todo/selectors";
import {addTodoAction, changeTodoStatusActions, removeTodo, setFilterByStatus} from "../../../store/todo";

export const Todos = () => {
    const [value, setValue] = useState();

    const dispatch = useDispatch();
    const list = useSelector(getFilteredByStatusTodoList)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // dispatch({
        //     type: ADD_TODO,
        //     payload: {
        //         id: Date.now(),
        //         text: value,
        //         status: false,
        //     }
        // })

        dispatch(addTodoAction({
            id: Date.now(),
            text: value,
            status: false,
        }))
    }

    const onChangeStatus = (todoId) => (event) => {
        // dispatch({
        //     type: CHANGE_TODO_STATUS,
        //     payload: {
        //         id: todoId,
        //         status: event.target.checked
        //     }
        // })
        dispatch(changeTodoStatusActions({
            id: todoId,
            status: event.target.checked
        }))
    }

    const onRemove = (id) => {
        // dispatch({
        //     type: REMOVE_TODO,
        //     payload: id
        // })
        dispatch(removeTodo(id))
    }

    const onChangeFilterList = (status) => {
        console.log('status', status)
        dispatch(setFilterByStatus(status))
    }

    return (
        <div>
            <h1>Todo</h1>

            <form onSubmit={onSubmit}>
                <input type="text" onChange={(event) => onChange(event)} value={value} />
                <button>send</button>
            </form>

            <br />

            <div>FilterBlock</div>
            <button onClick={() => onChangeFilterList()}>all</button>
            <button onClick={() => onChangeFilterList(true)}>true</button>
            <button onClick={() => onChangeFilterList(false)}>false</button>

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