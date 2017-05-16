import { Meteor } from 'meteor/meteor';
import Articles from '/imports/api/articles/collection';
import Security from '/imports/api/security.js';

Meteor.methods({
    'article.create' (data) {
        Security.checkLoggedIn(this.userId);
        
        Articles.insert(data);
    },

    'article.find' (id) {
    	Security.checkLoggedIn(this.userId);
        
        const articleQuery = Articles.createQuery({
            $filters: {_id: id},
            $options: {},
            title:1,
            user: {
                name: 1
            }
        });
        console.log(articleQuery.fetch());
    	return articleQuery.fetch();

    }
})


