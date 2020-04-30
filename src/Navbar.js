import React from 'react';


export default function NavBar() {
      return (
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
                    <li><a className="navbar-brand" href="/">USF</a></li>
                    <li><a className="navbar-brand" href="/">Home</a></li>
                    <li><a className="navbar-brand" href="/groups">Groups</a></li>
                    <li><a className="navbar-brand" href="/questionnaire">Questionnaire</a></li>
                    <li> <a href="/login" className="navbar-brand">Login</a></li>
                  </ul>           
            </div>
            </nav>  
          </header>
      );
  }
