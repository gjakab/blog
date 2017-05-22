import React, {Button, Component, PropTypes} from 'react';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/articles/query/allArticles';

class ArticlesList extends React.Component {
    constructor() {
        super();
    }

    handleDelete(id){
        Meteor.call('article.delete',id, function (err, res) {
            console.log(res);
            console.log(err);
        })
    }

    render() {
        const {data, loading, error} = this.props;

        if (loading) {
            return (
                <div>
                    <div>Loading...</div>
                    <a href="/">Home</a>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ul>
                        {
                            data.map((article) => {
                                if (article.user._id == Meteor.userId())
                                    return (
                                        <div >
                                            <Article article={article} key={article._id}></Article>
                                            <button className="btn btn-danger"
                                                    onClick={() => this.handleDelete(article._id)}>Delete this article
                                            </button>
                                        </div>
                                    )
                                else
                                    return (
                                        <Article article={article} key={article._id}></Article>
                                    )

                            })
                        }
                    </ul>
                    <AddArticle/>
                    <a href="/" className="btn btn-info">Home</a>
                </div>
            );
        }
    }
}

const Article = ({article}) => (
    <li>
        <h2><a href={"/viewArticle/"+ article._id }>{article.title}</a></h2>
        <h3>{article.description}</h3>
        created by:
        <p>{article.user.name}</p>

    </li>
);

const localQuery = query.clone();

export default createQueryContainer(localQuery, ArticlesList, {
    reactive: true
});

class AddArticle extends React.Component{
    constructor(){
        super();
    }
    render(){
        if(!Meteor.userId()){
            return <p>For adding articles you should <a href="/login">login</a> or <a href="/register">register</a></p>
        }
        else
            return <p>You can create articles <a href="createArticle" >here</a></p>
    }
}