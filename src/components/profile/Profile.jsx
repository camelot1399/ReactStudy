import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_CHECKBOX_PROFILE } from "../../store/profile";

export const Profile = () => {
    const dispatch = useDispatch();
    const statusCheckbox = useSelector((state) => state.status);

    const handleCheckbox = (event) => {
        dispatch({
            type: CHANGE_CHECKBOX_PROFILE,
            payload: {
                status: event.target.checked
            }
        })
    }

    return (
        <div>
            <h1>Profile</h1>

            <input 
                type="checkbox" 
                checked={statusCheckbox}
                onClick={handleCheckbox}
            />
        </div>
    );
};