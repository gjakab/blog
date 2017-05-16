import React from 'react';
export default class Home extends React.Component {
    render() {
        return (<div>
        	<h1>Welcome to blog</h1>
        	<a href="/login">Login</a>
        	<br></br>
        	<a href="/register">Register</a>
        	<br></br>
        	<a href="/articles">Articles</a>
        </div>)
    }
}