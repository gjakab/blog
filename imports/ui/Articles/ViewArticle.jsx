import React from 'react';
import route from '/imports/routing/router.js'
import {createContainer} from 'meteor/react-meteor-data';
import Formsy from 'formsy-react';
import Input from '../lib/Input';
import {createQueryContainer} from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/articles/query/oneArticle';
import ReactDOM from 'react-dom';


class ViewArticle extends React.Component {
    constructor() {
        super();

    }

    addComment(data) {
        Meteor.call('comment.create', data, route.current().params.id, function (err, res) {
            console.log(ReactDOM.findDOMNode(this.refs))
        });
    }

    render() {
        const {data, loading, error} = this.props;
        if (loading)
            return (
                <div>
                    <div>Loading...</div>
                    <p>Return to <a href="/articles">articles</a></p>
                </div>
            );
        else
            return (
                <div>
                    {
                        data.map((article)=> {
                            return (
                                <div key={article._id}>
                                    <div className="article">
                                        <h2 className="articleTitle">{article.title}</h2> by <p
                                        className="articleAuthor">{article.user.name}</p>
                                        <h3>{article.content}</h3>
                                    </div>
                                    <p>Comments: </p>
                                    <ul>
                                        {
                                            article.comments.map((comment)=> {
                                                return (
                                                    <div key={comment._id}>
                                                        <p className="commentBody"><p
                                                            className="comment">{comment.text}</p>
                                                            by {comment.user.name} </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <p>Enter a comment: </p>
                    <Formsy.Form onValidSubmit={this.addComment.bind(this)}>
                        <Input type="text" name="text" className="comma" placeholder="Enter a comment here" value=""/>
                        <button type="submit" className="btn btn-default">Add comment</button>
                    </Formsy.Form>
                    <p>Return to <a href="/articles">articles</a></p>
                </div>
            )


    }
}

export default (props) => {
    const localQuery = query.clone({_id: props.id});

    const Container = createQueryContainer(localQuery, ViewArticle, {
        reactive: true
    });

    return <Container />
}

