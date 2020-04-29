import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
Amplify.configure(aws_exports);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedUp : false
        }
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup() {
        this.setState({
            signedUp: true
        });
    }
    render() {
        const { signedUp } = this.state;
        return (
          <Router>
            <Navbar/>
            <div>
            <button onClick={ this.handleSignup }>Toggle</button>
            { !signedUp ? <SignUpForm /> : <SignInForm />}
          </div>
          <Footer />
          </Router>
        );
    }
}

export default App;