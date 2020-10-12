import { Meteor } from 'meteor/meteor';
import '/imports/api/tasks';
import '/imports/startup/server/Mongo';
import '../imports/api/publications/Publications'
import '../imports/api/methods/Methods'



Meteor.startup(() => {
  if (!Accounts.findUserByUsername('meteorite')) {
    Accounts.createUser({
      username: 'meteorite',
      password: 'password'
    });
  }





});
