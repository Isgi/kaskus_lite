import React, {Component, PropTypes} from 'react';
import { browserHistory } from 'react-router';

Register = React.createClass({
  getDefaultProps() {
    let loginMsg = "Already have an account?";
    return {
      loginLink: <p>{loginMsg} <a href="/login">Sign In</a></p>
    };
  },
  createUser(e) {
    e.preventDefault();
    const
      username = $('#username').val(),
      password = $('#password').val().trim()
    ;

    Accounts.createUser(
      {
        username: username,
        password: password
      },
      function(error) {
        if (error) {
          console.log("there was an error: " + error.reason);
        } else { 
          browserHistory.push('/');
        };
      }
    );
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Register</h1>
            <EmailPasswordForm
              submitBtnLabel="Register"
              submitAction={this.createUser}
            />
        
           {this.props.loginLink}
        </div>
      </div>
    )
  }
});