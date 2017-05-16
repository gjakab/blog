import { Mongo } from 'meteor/mongo';
import Articles from '/imports/api/articles/collection.js';
import Users from '/imports/api/users/collection.js';
import CommentsSchema from './schema.js';
import { Exposure } from 'meteor/cultofcoders:grapher';

const Comments = new Mongo.Collection('comments');
Comments.attachSchema(CommentsSchema);

Comments.before.insert(function (userId, doc) {
    doc.userId = userId;
    doc.articleId = null;
});

Comments.addLinks({
    user:{
    	type:'one',
    	collection: Users,
    	field:'userId'
    },
    article: {
        type: 'one',
        collection: Articles,
        field: 'articleId',
    }
});

export default Comments;