import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

function TextInput({ id, value, label, ...props }) {
  return (
    <div className={id}>
      <label htmlFor={id}>{label}</label>
      <input className="input" id={id} name={id} value={value} {...props} />
    </div>
  );
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      confirmationCode: '',
      verified: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUp = this.signUp.bind(this);
    this.confirmSignUp = this.confirmSignUp.bind(this);
  }

  signUp() {
    const { username, password, email } = this.state;
    Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: email
      }
    })
      .then(() => {
        console.log('Successfully signed up');
      })
      .catch(err => console.error('Error signing up', err));
  }

  confirmSignUp() {
    const { username, confirmationCode } = this.state;
    Auth.confirmSignUp(username, confirmationCode)
      .then(() => {
        console.log('Successfully confirmed signed up');
        this.props.handleSignup();
      })
      .catch(err => console.error(`Error confirming sign up - ${err}`, err));
  }

  handleSubmit(e) {
    const { verified } = this.state;

    e.preventDefault();

    if (verified) {
      this.confirmSignUp();
      this.setState({
        confirmationCode: '',
        username: ''
      });
    } else {
      this.signUp();
      this.setState({
        password: '',
        email: '',
        verified: true
      });
    }
    e.target.reset();
  }

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  handleChange(e) {
    // this is a shorthand for using "name" field to set the state
    const { name, value } = e.target;
    this.setState({ [name]: value });

    // if (e.target.id === 'username') {
    //   this.setState({
    //     username: e.target.value
    //   });
    // } else if (e.target.id === 'password') {
    //   this.setState({
    //     password: e.target.value
    //   });
    // } else if (e.target.id === 'confirmPassword') {
    //   this.setState({
    //     confirmPassword: e.target.value
    //   });
    // } else if (e.target.id === 'email') {
    //   this.setState({
    //     email: e.target.value
    //   });
    // } else if (e.target.id === 'confirmationCode') {
    //   this.setState({
    //     confirmationCode: e.target.value
    //   });
    // }
  }

  render() {
    const { verified } = this.state;

    if (verified) {
      return (
        <article>
          <section className="section auth">
            <div className="container">
              <h1>Create an Account</h1>
              <form onSubmit={this.handleSubmit}>
                <TextInput
                  id="confirmationCode"
                  label="Confirmation Code: "
                  value={this.state.confirmationCode}
                  onChange={this.handleChange}
                />
                {/*
                  <div className="confirmationCode">
                    <label htmlFor="confirmationCode">Confirmation Code: </label>
                    <input
                      id="confirmationCode"
                      name="confirmationCode"
                      placeholder="Confirmation code"
                      type="text"
                      value={this.state.confirmationCode}
                      onChange={this.handleChange}
                    />
                  </div>
                */}
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
    } else {
      return (
        <article>
          <section className="section auth">
            <div className="container">
              <h1>Create an Account</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="username">
                  <label htmlFor="username">Username: </label>
                  <input
                    className="input"
                    placeholder="Enter username"
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email: </label>
                  <input
                    className="input"
                    placeholder="Enter email"
                    type="email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password: </label>
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="confirmPassword">
                  <label htmlFor="confirmPassword">Confirm password: </label>
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
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

export default SignUpForm;
