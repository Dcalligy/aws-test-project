import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
//import FormErrors from './FormErrors';


class SignInForm extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            username: '',
            password: '',
            signedIn: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
        this.confirmSignIn = this.confirmSignIn.bind(this);
    }
  
    signIn() {
        const { username, password } = this.state;  
        Auth.signIn({
            username: username,
            password: password
        })
        .then(() => console.log('successfully signed in'))
        .catch((err) => console.log(`Error signing in: ${ err }`))
    }
  
    confirmSignIn() {
        const { username, password } = this.state;
        Auth.confirmSignIn(username, password)
        .then(() => console.log('successfully confirmed signed in'))
        .catch((err) => console.log(`Error confirming sign up - ${ err }`))
    }
  
    handleSubmit(e) {
        e.preventDefault();

        this.signIn();
        this.confirmSignIn()
        this.setState({
            username: '',
            password: '',
            signedIn: true
        });
        e.target.reset();
    }
  
    handleChange(e) {
        if (e.target.id === 'username') {
          this.setState({
              username: e.target.value
          });
        } else if (e.target.id === 'password') {
          this.setState({
              password: e.target.value
          });
        }
    }
  
    render() {
      const { signedIn } = this.state;
      if (signedIn) {
          return (
              <article>
              <section className="section auth">
                <div className="container">
                  <h1>Welcome!</h1>
                  <p>Login successful! Please fill out the questionnaire!</p>
                </div>
                </section>
              </article>
          );
      } else {
        return (
            <article>
            <section className="section auth">
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={ this.handleSubmit }>
                  <div className="field">
                    <label htmlFor="username">Username: </label>
                    <input
                      className="input"
                      type="text"
                      id="username"
                      placeholder="Enter username"
                      value={ this.state.username }
                      onChange={ this.handleChange }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="password">Password: </label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={ this.state.password }
                      onChange={ this.handleChange }
                    />
                  </div>
                  <div className="field">
                    <p className="control">
                      <button type="submit" className="btn btn-custom">
                        Submit
                      </button>
                    </p>
                  </div>
                </form>
            </div>
          </section>
          </article>
        );
      }
    }
}

export default SignInForm;