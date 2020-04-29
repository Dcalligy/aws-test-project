import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import './App.css';



export default class NavBar extends Component{
  handleLogOut = async event =>{
    event.preventDefault();
    try{
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error){
      console.log(error.message);
    }
  }
  render(){
      return(
          // Header using Bootstrap
          <header role="banner">
            <nav className="navbar navbar-default navbar-usf-colors">
        <button type="button" 
        className="navbar-toggle" 
        data-toggle="collapse" 
        data-target="#navbarNavDropdown">

    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
</button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
            
                  <ul className="nav navbar-nav ">

                    <li><a className="navbar-brand" href="https://www.usf.edu/">USF</a></li>
                    <li><a className="navbar-brand" href="/">Home</a></li>
                    <li><a className="navbar-brand" href="/groups">Groups</a></li>
                    <li><a className="navbar-brand" href="/questionnaire">Questionnaire</a></li>
                    <li><a className="navbar-brand">                    {!this.props.auth.isAuthenticated && this.props.auth.user &&(
                      <p>
                        Hello {this.props.auth.user.username}
                      </p>
                    )}
                    <li><a>
                      {!this.props.auth.isAuthenticated && (
                       <li> <a href="/login" className="navbar-brand">
                          Log in
                        </a></li>
                      )}
                      {this.props.auth.isAuthenticated && (
                        <li><a href="/" onClick={this.handleLogOut} className="navbar-brand">
                          Log out
                        </a></li>
                      )}</a></li> </a></li>
        
        
                  </ul>
                  
            </div>
            </nav>  
          </header>
      );
  }
}