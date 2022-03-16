import React from "react";
import { Link } from "react-router-dom";

export const HomeLayout = ({children}) => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/rooms/1">Rooms</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/fromAPI">fromAPI</Link>
                </li>
            </ul>
        </nav>

        {children}
        </>
    );
};