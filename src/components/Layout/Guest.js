import React from 'react';
import { Link } from 'react-router';

const Guest = () =>
  <nav className="navbar fixed-top">
    <Link to='/' className="navbar-brand">Logo</Link>
    <div className="navbar-nav send-right">
        <Link to='/users/sign_in' className="nav-item nav-link" >Sign In</Link>
    </div>
  </nav>



export default Guest;
