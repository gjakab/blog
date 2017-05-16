import { Meteor } from 'meteor/meteor';
import Comments from './collection';

Meteor.publish('comments', function () {
    return Comments.find();
})