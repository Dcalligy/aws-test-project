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
                       <Navbar />
                       <Switch>
                           <Route exact path="/" component={SignUpForm} />} />
                           <Route exact path="/login" component={SignInForm} />
                           <Route exact path="/questionnaire" component={Question} />
                           <Route exact path="/groups" component={Groups} />
                       </Switch>
                       <Footer />
                   </div>
               </Router>
           </div>

        );
    }
}

export default App;
