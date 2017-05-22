import { Meteor } from 'meteor/meteor';
import Articles from '/imports/api/articles/collection';
import Security from '/imports/api/security.js';

Meteor.methods({

    'article.create' (data) {
        Security.checkLoggedIn(this.userId);
        const articleId = Articles.insert(data);
        const userLink = Articles.getLink(articleId,'user');
        userLink.set(this.userId);
    },

    'article.delete' (id){
        Security.checkLoggedIn(this.userId);
        const userLink = Articles.getLink(id,'user');
        const author = userLink.fetch()._id;
        if(author == Meteor.userId())
            Articles.remove({_id:id});
        else{
            throw new Meteor.Error('error', 'Cannot delete article', {
                why: "This isn't your article."
            });
        }
    }
});


