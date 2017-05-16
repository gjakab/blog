import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'user.register' (data) {
    	Accounts.createUser(data);
    }
});