import React from 'react';
import route from '/imports/routing/router';

export default class Home extends React.Component {

	logOut(){
        Meteor.logout(function (err) {
            if (!err) {
                location.reload()
            } else {
                console.log(err);
            }
        });
	}

    render() {
        if(!Meteor.userId())
			return (<div>
				<h1>Welcome to blog</h1>
				<a href="/login" className="btn btn-info">Login</a> <br></br>
				<a href="/register" className="btn btn-info">Register</a> <br></br>
				<a href="/articles"className="btn btn-success">Articles</a>
			</div>)
		else
			return (
				<div>
					<h1>Welcome to blog</h1>
					<a className="btn btn-success" href="/articles">Articles</a> <br></br>
					<button className="btn btn-danger" onClick={this.logOut.bind(this)}>Log out</button>
				</div>
			)
    }
}