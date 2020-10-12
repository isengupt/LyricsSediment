
import { Meteor } from 'meteor/meteor';
import { SongPoint } from '../../database/Points';
var today = new Date();
today.setHours(0,0,0,0);


  if (Meteor.isServer) {
    Meteor.publish('Songs', function() {
      return SongPoint.find(
        {rootDate: {$gte: today } }, 
      );
    })
  }

  if (Meteor.isServer) {
    Meteor.publish('FullSongs', function() {
      return SongPoint.find(
        {}, 
      );
    })
  }
  