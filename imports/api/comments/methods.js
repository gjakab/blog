import {Meteor} from 'meteor/meteor';
import Comments from '/imports/api/comments/collection';
import Security from '/imports/api/security.js';

Meteor.methods({
    'comment.create' (data, articleId){
        Security.checkLoggedIn(this.userId);
        Comments.insert({text: data.text, articleId: articleId});
    },

    'comments.get' () {
        Security.checkLoggedIn(this.userId);
        const query = Comments.createQuery({
            article: {
                title: 1
            }
        });
        return query.fetch();
    }
});
