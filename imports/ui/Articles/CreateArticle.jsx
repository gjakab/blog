import React, {Button, Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Articles from '/imports/api/articles/collection';
import Formsy from 'formsy-react';
import Input from '../lib/Input';


export default class CreateArticle extends Component{
	constructor(){
		super();
	}

	
	addArticle(data){
		Meteor.call('article.create',data, function (err, res) {
			console.log(err, res);
		})
		
	}

	render(){
		const subscribtion = Meteor.subscribe('self');

		return(
			<div>
				<Formsy.Form onValidSubmit={this.addArticle.bind(this)}>
	                <Input type="text" name="title" placeholder="Article's title" value=""/>
	                <Input type="text" name="description" placeholder="Description" value=""/>
	                <Input type="text" name="content" placeholder="Content" value=""/>
	                <button type="submit" className="btn btn-default">Add Article</button>
	            </Formsy.Form>
	            <p> Back to <a href="/articles">articles</a></p>
			</div>
		)
	}

}