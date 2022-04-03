import React from 'react';

export const Message = ({ message }) => {
    var toggle_id = '#' + message._id;
    return (
        <div className='media border p-3 mb-1'>
            <div className='media-body'>
                <h4>{message.title}</h4>
                <p>{message.text}</p>
            </div>
        </div>
    )
}