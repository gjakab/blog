import { Meteor } from 'meteor/meteor';
import Articles from './collection';

Meteor.publish('articles', function () {
    return Articles.find();
})