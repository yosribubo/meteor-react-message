import { Meteor } from 'meteor/meteor'

// Auth imports
import { addUser } from './auth/addUser'

// MessageCollection import
import { messageCollection } from '/imports/api/messageCollection'

Meteor.startup(() => {
  addUser()
})