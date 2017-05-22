import Users from '/imports/api/users/collection';
import Articles from '/imports/api/articles/collection';
import Comments from '/imports/api/comments/collection';

Users.addLinks({
    articles:{
        type: 'many',
        collection: Articles,
        inversedBy: 'user'
    },
    comments:{
        type: 'many',
        collection: Comments,
        inversedBy: 'user'
    }
});