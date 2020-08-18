import React, { forwardRef } from 'react';
import './Message.css';
import {
    Card,
    Typography,
    CardContent,
} from '@material-ui/core';


const Message = forwardRef(({ message, username }, ref) => {
    let isUser = false;
    isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Typography
                className="username"
            >
                {!isUser && `${message.username || 'Unknown'} `}
            </Typography>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        className="text">
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
