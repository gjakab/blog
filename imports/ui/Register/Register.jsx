import React, {Button, Component, PropTypes} from 'react';
import Formsy from 'formsy-react';
import Input from '../lib/Input';
import route from '/imports/routing/router.js';

export default class Register extends Component {
    constructor() {
        super();
    }

    handleRegister(data) {

        //client validation
        if(data.password!=data.repeatPassword){
            alert("Passwords don't match!");
        }
        else{
            //all is good
            Meteor.call('user.register', data, (err, result) => {
                if(!err) {
                    //login at the same time
                    Meteor.loginWithPassword(data.email, data.password, function (err) {
                        if (!err) {
                            console.log('I was called because authentication was a success')
                        } else {
                            console.log(err);
                        }
                    })

                    //go to main page
                    route.go('/');
                }
                else{
                    alert(err);
                }
            });
        }
            
    }
    handleChange(data){
    	
    }

    render() {
        return (
            <div>
                <h1>This is register page</h1>

                <div className="login-content">
                    <Formsy.Form className="login-form" onValidSubmit={this.handleRegister.bind(this)} onChange={this.handleChange.bind(this)}>
                    	<Input type="name" name="name"  placeholder="Name"value=""/>
                        <Input type="email" name="email" placeholder="Email" value=""/>
                        <Input type="password" name="password" placeholder="Password" value=""/>
                        <Input type="password" name="repeatPassword" placeholder="Repeat Password" value=""/>
                        <button type="submit" className="btn btn-default">Register</button>
                    </Formsy.Form>
                </div>
                <p>Already registered? Login <a href="/login">here</a></p>
                <a href="/">Home</a>
            </div>
        );
    }
}