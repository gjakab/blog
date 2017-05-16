import {Mongo} from 'meteor/mongo';
import ArticleSchema from './schema';
import Comments from '/imports/api/comments/collection';
import Users from '/imports/api/users/collection';

const Articles = new Mongo.Collection('articles');

Articles.attachSchema(ArticleSchema);

Articles.before.insert(function (userId, doc) {
    doc.userId = userId;
});

Articles.addLinks({
    user: {
        type: 'one',
        collection: Users,
        field: 'userId',
    }
});

export default Articles;


