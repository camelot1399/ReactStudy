import React from "react";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


export const RoomsList = ({chatList, children}) => {
    console.log(chatList);
    return (
        <div>
            {children}

            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Rooms list
                </ListSubheader>
                }
            >
                {chatList.map(room => {
                    return (
                        <Link to={`/rooms/${room.id}`}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>

                                <ListItemText primary={room.name} />
                                </ListItemButton>
                        </Link>
                    )
                })}
                
            </List>
        </div>
        
    )
}