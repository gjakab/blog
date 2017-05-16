import React, {Button, Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Articles from '/imports/api/articles/collection';

class ArticlesList extends React.Component{
	constructor(){
		super();
	}

	render(){
		const {loading, articles} = this.props;
		if (loading ) {
            return (
                <div>
                    <div>Loading...</div>
                    <a href="/">Home</a>
                </div>
            )
        } else {
            return (
                <div>
                    {
                    	articles.map((article)=>{
                    		return (
                    			<div className = "article" key={article._id}>
                    		    <a href={"/viewArticle/" +article._id}>{article.title}</a>
                    				<p>{article.author}</p>
                    				<h3>{article.description}</h3>
                                    
                    			</div>
                    			)
                    	})
                    }
                    <p> Create new article <a href="/createArticle">here</a></p>
                    <a href="/">Home</a>
                </div>
            )
        }
	}
}

export default createContainer(( params ) => {
  const subscription = Meteor.subscribe('articles');
  const loading = !subscription.ready();
  const articles = Articles.find().fetch();

  return { loading, articles };
}, ArticlesList);