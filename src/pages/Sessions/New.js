import React from 'react'
import { observer, inject } from 'mobx-react'
import './New.css'
import Page from '../../components/Page'
import { Link } from 'react-router'

@inject('user')
@observer class New extends React.Component {
  submitForm = (e) => {
    e.preventDefault();

    const { user } = this.props;
    // create session with email & token
    user.signIn(
      this.email.value,
      this.password.value
    );
  }
  render() {
    const extras = <Link to='users/sign_up'>Don't have an account? Sign up.</Link>
    return(
      <Page.Auth title='Sign In' extras={extras}>
        {/* <a className='logoLink' href="http://placeholder.com"><img src="http://via.placeholder.com/140x100" alt='logo'/></a> */}
        <form className='user-registration-form' onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input ref={(input) => this.email = input} type="email" className="form-control" id="emailInput" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input ref={(input) => this.password = input} type="password" className="form-control" id="passwordInput" placeholder="password" />
          </div>
          <button className="btn btn-primary logInBtn" type='submit'>Log In</button>
        </form>
      </Page.Auth>
    )
  }
}

export default New ;
