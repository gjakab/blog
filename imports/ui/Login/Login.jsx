import React from 'react';
import Formsy from 'formsy-react';
import Input from '../lib/Input';
import route from '/imports/routing/router';

export default class Login extends React.Component{
	constructor(){
		super();
	}

	handleLogin(data){
		Meteor.loginWithPassword(data.email, data.password, function (err) {
		    if (!err) {
		        route.go('/')
		    } else {
		        alert(err);
		    }
		})
	}

	render(){
		return (<div>
			
			<h1>This is login page</h1>
			<div className="login-content">
                <Formsy.Form className="login-form" onValidSubmit={this.handleLogin.bind(this)}>
                    <Input type="email" name="email" placeholder="Email" value=""/>
                    <Input type="password" name="password" placeholder="Password" value=""/>
                    <button type="submit" className="btn btn-default">Login</button>
                </Formsy.Form>
            </div>
            <p>Don't have an account? Register <a href="/register">here</a></p>
            <a href="/">Home</a>
		</div>)

	}
}