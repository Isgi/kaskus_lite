import React, {Component, PropTypes} from 'react';
import { browserHistory } from 'react-router';
Login = React.createClass({
  getDefaultProps() {
    let registerMsg = "Don't have an account?";
    return {
      registerLink: <p>{registerMsg} <a href="/register">Register</a></p>
    };
  },
  loginWithPassword(e) {
    e.preventDefault();
    const username = $('#username').val(),
          password = $('#password').val().trim()
    ;

    Meteor.loginWithPassword(username, password, function(error) {
      if (error) {
        console.log("There was an error:" + error.reason);
      } else {
        browserHistory.push('/');
      }
    });
  }, 
  render() {
        return (
        <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Login</h1>
            <EmailPasswordForm
              submitBtnLabel="Login"
              submitAction={this.loginWithPassword}
            />
            {this.props.registerLink}
        </div>
      </div>
        )
    }
});

export default Login;