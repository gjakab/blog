import Articles from '/imports/api/articles/collection';
import Users from '/imports/api/users/collection';
import Comments from '/imports/api/comments/collection';

Articles.addLinks({
    comments:{
      type:'many',
        collection:Comments,
        field: 'commentId'
    },
    user:{
        type:'one',
        collection: Users,
        field: 'userId'
    }
});