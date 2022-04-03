import React, { useState } from "react";
import { addMessage } from "/imports/api/addMessage";

export const MessageInForm = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleSend = e => {
        e.preventDefault();

        if (!title || !text) {
            alert("Please input message content!")
            return false;
        }

        addMessage(title, text);

        setText('')
        setTitle('')
    }

    return (
        <form className="form" onSubmit={handleSend}>
            <div className="row">
                <div className="col-sm-12 col-md-4 form-item">
                    <input type="text" className="form-control" 
                            placeholder="Enter Message Title"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e => setTitle(e.target.value))}
                            required
                    />
                </div>
                <div className="col-sm-12 col-md-6 form-item">
                    <input type="text" className="form-control"
                            placeholder="Enter Message Text"
                            id="text"
                            name="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                    />
                </div>
                <div className="col-sm-12 col-md-2 form-item">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </div>
        </form>
    )
}