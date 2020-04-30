import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Question from './Question';
import Groups from './Groups';
import  { Auth } from 'aws-amplify';
Amplify.configure(aws_exports);

class App extends Component {
    state = {
        isAuthenticated: false,
        isAuthenticating: true,
        user: null
    }

    setAuthStatus = authenticated =>{
        this.setState({ isAuthenticated: authenticated});
    }

    setUser = user =>{
        this.setState({ user: user });
    }

    async componentDidMount(){
        try{
            const session = await Auth.currentSession();
            this.setAuthStatus(true);
            console.log(session);
            const user = await Auth.currentAuthenticatedUser();
            this.setUser(user);
        }catch(error){
            if(error !== 'No current user'){
                console.log(error);
            }
        }
        this.setState({ isAuthenticating: false });
    }
    render() {
        //const { signedUp } = this.state;
        const authProps = {
            isAuthenticated: this.state.isAuthenticated,
            user: this.state.user,
            setAuthStatus: this.setAuthStatus,
            setUser: this.setUser
        }
        return (
          /*<Router>
            <Navbar/>
            <div>
            <button onClick={ this.handleSignup }>Toggle</button>
            { !signedUp ? <SignUpForm /> : <SignInForm />}
          </div>
          <Footer />
          </Router>
          <Route exact path="/groups" render={(props) => <Groups {...props} auth={authProps} />} />
          */
           !this.state.isAuthenticated &&
           <div className="App">
               <Router>
                   <div>
                       <header role="banner">
                          <nav className="navbar navbar-default navbar-usf-colors">
                            <button type="button" 
                              className="navbar-toggle" 
                              data-toggle="collapse" 
                              data-target="#navbarNavDropdown">
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="nav navbar-nav ">
                                  <li><Link to="/" className="navbar-Link">USF</Link></li>
                                  <li><Link to="/" className="navbar-Link">Home</Link></li>
                                  <li><Link to="/questionnaire" className="navbar-Link">Questionnaire</Link></li>
                                  <li><Link to="/groups" className="navbar-Link">Groups</Link></li>
                                  <li><Link to="/login" className="navbar-Link">Login</Link></li>
                                </ul>           
                              </div>
                            </nav>  
                      </header>
                       <Switch>
                           <Route exact path="/" render={(props) => <SignUpForm {...props} auth={authProps} />} />
                           <Route exact path="/login" render={(props) => <SignInForm {...props} auth={authProps} />} />
                           <Route exact path="/questionnaire" render={(props) => <Question {...props} auth={authProps} />} />
                           <Route exact path="/groups" render={(props) => <Groups {...props} auth={authProps} />} />
                       </Switch>
                       <Footer />
                   </div>
               </Router>
           </div>

        );
    }
}

export default App;