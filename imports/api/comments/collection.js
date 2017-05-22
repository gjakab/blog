import { Mongo } from 'meteor/mongo';
import CommentsSchema from './schema.js';

const Comments = new Mongo.Collection('comments');
Comments.attachSchema(CommentsSchema);

export default Comments;