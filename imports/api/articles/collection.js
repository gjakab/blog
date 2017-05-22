import {Mongo} from 'meteor/mongo';
import ArticleSchema from './schema';

const Articles = new Mongo.Collection('articles');

Articles.attachSchema(ArticleSchema);

Articles.before.insert(function (userId, doc) {
    doc.userId = userId;
});

export default Articles;


