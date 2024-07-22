import React from 'react'
import './message.css'

const Message = ({ text }) => {
    return (
        <div className="message-container">
            <h1 className='font'>{text}...</h1>
        </div>
    );
};

export default Message