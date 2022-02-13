import React from "react";
import Card from "../card/Card";

export const List = ({users}) => {
    console.log('users', users);

    return (
        <div>
            <h2>list users</h2>

            {
                users.map(user => (<Card user={user}/>))
            }
        </div>
    );
};