import { Meteor } from 'meteor/meteor';
import Comments from '/imports/api/comments/collection';
import Security from '/imports/api/security.js';

Meteor.methods({
    'comments.find' (id) {
    	Security.checkLoggedIn(this.userId);
    	return Comments.find({articleId: id}).fetch();
    },
    'comment.create' (data){
        //Security.checkLoggedIn(this.userId);
        Comments.insert({text:data.text,articleId: data.articleId});
    },
    'comments.get' (){
        //Security.checkLoggedIn(this.userId);
        const localQuery = Comments.createQuery({
            $filters: {},
            $options: {},
            text:1,
            user: {
                name: 1
            },
            article:{
                title: 1
            }
        });

        return localQuery.fetch();
    }
});