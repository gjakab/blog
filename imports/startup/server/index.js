import './globals.js'
import '/imports/api/users/methods';
import '/imports/api/articles/methods.js';
import '/imports/api/comments/methods.js';
import '/imports/api/articles/publication.js';
import '/imports/api/comments/publication.js';
import { Accounts } from 'meteor/accounts-base';
import UserSchema from '/imports/api/users/schema';
import Comments from '/imports/api/comments/collection';

Accounts.onCreateUser(function (options, user) {
	console.log(options);
	_.extend(user, options);
	_.extend(user, UserSchema.clean(user));

	return user;
 });

Meteor.publish('self', function () {
    return Meteor.users.find(this.userId);
});

Comments.expose({});


