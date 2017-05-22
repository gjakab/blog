import { Meteor } from 'meteor/meteor';
import Comments from '/imports/api/comments/collection';
import Security from '/imports/api/security.js';

Meteor.methods({

    'comment.create' (data,articleId){
        Security.checkLoggedIn(this.userId);

        const commentId = Comments.insert({text:data.text,articleId: data.articleId});
        const userLink = Comments.getLink(commentId,'user');

        //setting link to user
        userLink.set(this.userId);
        const articleLink= Comments.getLink(commentId,'article');
        articleLink.set(articleId);

    },
    'comments.get' (){
        Security.checkLoggedIn(this.userId);
        const query = Comments.createQuery({ article: {title:1}  });
        return query.fetch();
    }

});
