import React from 'react';
import { Meteor } from 'meteor/meteor';


import "../imports/routes/routes";

Meteor.startup(() => {
  $('body').addClass('body');
});
