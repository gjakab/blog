import React from 'react';
import route from '/imports/routing/router'
import {createContainer} from 'meteor/react-meteor-data';
import Comments from '/imports/api/comments/collection';
import Formsy from 'formsy-react';
import Input from '../lib/Input';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';


class ViewArticle extends React.Component {
	constructor(){
		super();

	}

    addComment(data){
        Meteor.call('comment.create',data, function (err, res) {
            console.log(err, res);
        })

    }

    render() {
         const {isReady, comments} = this.props;


        if(!isReady)
             return <p>Loading...</p>
        else
            return (
                <div>
                    {
                        comments.map((comment)=>{
                            return (
                                <div key={comment._id}>
                                    <p>{comment.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )



    }
}

export default createContainer(() => {
    const handle = localQuery.subscribe();
    const comments = localQuery.fetch();

    console.log(localQuery.fetch());
    return {
        isReady: handle.ready(),
        comments: comments
    }
}, ViewArticle);



