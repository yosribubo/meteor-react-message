import { Meteor } from 'meteor/meteor';
import { messageCollection } from './messageCollection';

export const addMessage = (title, text) => {
    messageCollection.insert({
        title: title,
        text: text,
        createdAt: new Date()
    })
}

