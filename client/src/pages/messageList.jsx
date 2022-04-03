import React from 'react'
import { useTracker } from 'meteor/react-meteor-data';
import { messageCollection } from '/imports/api/messageCollection'
import { Message } from './message';
import { MessageInForm } from './mesageInForm';

// import 'bootstrap/dist/css/bootstrap.css'

export const MessageList = () => {
    const messages = useTracker(
        () => messageCollection.find({}, { sort: {createdAt: -1} }).fetch()
    );

    const counts = messages.length;

    return (
        <div className='main'>
            <div className='container'>
                <div className="banner">
                    <h1>Welcome to Meteor & React</h1>
                    <p>You can send message and show message list</p>
                </div>
                <MessageInForm />
                <div>
                    Total Messages: {counts}
                </div>
                <hr />
                { counts === 0 ? (
                    <div>
                        No message
                    </div>
                ) : (
                    <div>
                        { messages.map( 
                            message => <Message key={ message._id } message={ message } />
                        ) }
                    </div>
                )
                }
                
            </div>
        </div>
    );
}