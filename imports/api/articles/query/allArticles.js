import { createQuery } from 'meteor/cultofcoders:grapher';
import Articles from '/imports/api/articles/collection';

export default Articles.createQuery({
    $filter:{sort: {createdAt:1}},
    title: 1,
    description:1,
    user: {
        name: 1
    }
});