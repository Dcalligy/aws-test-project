import React from 'react';

// NOTE: I like splitting big stuff into separate components... its up to you.
//       I threw these together for reference, so they're not smart or anything -- for real, its up to you.
//       One benefit is that it makes it WAY easier to use the react dev tools and debug stuff.

//#region Navbar child components
/** Links for the navbar header. */
function NavbarHeader() {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav">
        <a className="navbar-brand" href="#" style={{ color: 'gray' }}>
          USF
        </a>
        <a className="navbar-brand" href="#">
          Home
        </a>
        <a className="navbar-brand" href="#">
          Groups
        </a>
      </ul>
    </div>
  );
}

/** Login form in the navbar dropdown.
function NavbarLoginForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="loginEmail">USF Email:</label>
        <br />
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" className="form-control" id="loginPassword" placeholder="Password" required />
        <button type="submit" className="btn btn-form">
          Submit
        </button>
      </div>
    </form>
  );
}

/** Navbar login button and dropdown form.
function NavbarLoginButton() {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown" style={{ align: 'right' }}>
        <a className="dropdown-toggle" data-toggle="dropdown" href="#" style={{ color: 'white', fontSize: '155%' }}>
          Login
        </a>
        <ul className="dropdown-menu" style={{ padding: '5px', width: '100%' }}>
          <NavbarLoginForm />
        </ul>
      </li>
    </ul>
  );
}
*/
//#endregion

// NOTE: Try not using `extends Component` unless you need to handle state
//        (You can also try using hooks for state. Hooks can get complicated
//        real quick, so I'd recommend just doing whatever is easiest/quickest).
export default function NavBar() {
  //#region original
  // return (
  //   // Header using Bootstrap
  //   <header role="banner">
  //     <nav className="navbar navbar-custom">
  //       <div className="container-fluid">
  //         <div className="collapse navbar-collapse" id="myNavbar">
  //           <div className="navbar-header">
  //             <ul className="nav navbar-nav">
  //               <a className="navbar-brand" href="#" style={{ color: 'gray' }}>
  //                 USF
  //               </a>
  //               <a className="navbar-brand" href="#">
  //                 Home
  //               </a>
  //               <a className="navbar-brand" href="#">
  //                 Groups
  //               </a>
  //             </ul>
  //           </div>

  //           <ul className="nav navbar-nav navbar-right">
  //             <li className="dropdown" style={{ align: 'right' }}>
  //               <a className="dropdown-toggle" data-toggle="dropdown" href="#" style={{ color: 'white', fontSize: '155%' }}>
  //                 Login
  //               </a>

  //               <ul className="dropdown-menu" style={{ padding: '5px', width: '100%' }}>
  //                 <form>
  //                   <div className="form-group">
  //                     <label htmlFor="loginEmail">USF Email:</label>
  //                     <br />
  //                     <input
  //                       type="email"
  //                       className="form-control"
  //                       id="loginEmail"
  //                       aria-describedby="emailHelp"
  //                       placeholder="Enter email"
  //                       required
  //                     />
  //                   </div>

  //                   <div className="form-group">
  //                     <label htmlFor="loginPassword">Password:</label>
  //                     <input type="password" className="form-control" id="loginPassword" placeholder="Password" required />
  //                     <button type="submit" className="btn btn-form">
  //                       Submit
  //                     </button>
  //                   </div>
  //                 </form>
  //               </ul>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </header>
  // );
  //#endregion

  return (
    <header role="banner">
      <nav className="navbar navbar-custom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="myNavbar">
            <NavbarHeader />
          </div>
        </div>
      </nav>
    </header>
  );
}
