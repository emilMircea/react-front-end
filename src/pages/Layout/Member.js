import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

@inject('user') @observer
class Member extends React.Component {
  signOut = (e) => {
    e.preventDefault();
    const { user } = this.props;

    user.destroySession();
  }
  render() {
    return(
      <nav className="navbar fixed-top">
        <div className="logo">
          <Link to='/' className="navbar-brand">Logo here </Link>
        </div>

        <div className="navbar-nav send-right">
            <Link to='/users/sign_in' className="nav-item nav-link user-email-link">
              {this.props.user.email}
            </Link>

            <Link to='/users/sign_in' onClick={this.signOut} className="nav-item nav-link sign-out-link">
              Sign Out
            </Link>
        </div>
      </nav>
    );
  }
}


export default Member;
