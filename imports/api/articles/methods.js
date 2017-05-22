import { Meteor } from 'meteor/meteor';
import Articles from '/imports/api/articles/collection';
import Security from '/imports/api/security.js';

Meteor.methods({
    'article.create' (data) {
        Security.checkLoggedIn(this.userId);
        Articles.insert(data);
    },

    'article.delete' (id){
        Security.checkLoggedIn(this.userId);
        // metoda 1
        Articles.remove({_id: id, userId: this.userId});
        // metoda 2
        const article = Articles.findOne(id);
        if (article) {
            if (article.userId == this.userId) {
                Articles.remove(id);
            } else {
                // not allowed
            }
        } else {
            throw new Meteor.Error('not found');
        }
    }
});


