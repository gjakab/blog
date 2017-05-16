import { Mongo } from 'meteor/mongo';
import UserSchema from './schema';

const Users = Meteor.users;

Users.attachSchema(UserSchema);

export default Users;