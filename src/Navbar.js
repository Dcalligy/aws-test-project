import React, { Component } from 'react';
//import { Auth } from 'aws-amplify';

export default class NavBar extends Component{
  /*handleLogOut = async event =>{
    event.preventDefault();
    try{
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error){
      console.log(error.message);
    }
  }*/
  render(){
      return(
          // Header using Bootstrap
          <header role="banner">
            <nav className="navbar navbar-custom">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="myNavbar">
                <div className="navbar-header">
                  <ul className="nav navbar-nav">

                    <a className="navbar-brand" href="/">USF</a>
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/groups">Groups</a>
                    <a className="navbar-brand" href="/questionnaire">Questionnaire</a>
                    
                  </ul>
                  
                </div>
                <div className="navbar-brand">
                  <div className="navbar-brand">
                    {!this.props.auth.isAuthenticated && this.props.auth.user &&(
                      <p>
                        Hello {this.props.auth.user.username}
                      </p>
                    )}
                    <div className="buttons">
                      {!this.props.auth.isAuthenticated && (
                        <a href="/login" className="btn btn-custom">
                          Log in
                        </a>
                      )}
                      {this.props.auth.isAuthenticated && (
                        <a href="/"  className="btn btn-custom">
                          Log out
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </nav>  
          </header>
      );
  }
}