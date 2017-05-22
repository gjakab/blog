import Comments from '/imports/api/comments/collection';
import Articles from '/imports/api/articles/collection';
import Users from '/imports/api/users/collection';

Comments.addLinks({
    article:{
        type:'one',
        collection: Articles,
        inversedBy:'comments'
    },
    user:{
        type:'one',
        collection: Users,
        field:'userId'
    }
});