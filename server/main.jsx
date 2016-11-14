import {Meteor} from 'meteor/meteor';
import {Threads} from '../collections/Threads';

Meteor.publish('threads', function () {
  return Threads.find({});
});