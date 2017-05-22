import { createQuery } from 'meteor/cultofcoders:grapher';
import Articles from '/imports/api/articles/collection';

export default Articles.createQuery({
    $filter({filters, options, params}) {
        filters._id = params._id;
    },
    title:1,
    content:1,
    comments:{
        $options: {
            sort:{createdAt:-1}
        },
        text:1,
        user:{
            name:1
        },
        date:1
    },
    user:{
        name:1
    }
});