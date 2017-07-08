import React from 'react'
import Page from '../../components/Page'
import { Link } from 'react-router'

class New extends React.PureComponent {

  submitForm = (e) =>
    e.preventDefault()

  render() {
    const extras = <Link to='users/sign_in'>Already have an account? Sign In here.</Link>
    return (
      <Page.Auth title='Sign Up Page' extras={extras}>
        <form className='user-registration-form animated fadeIn' onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input ref={(input) => this.email = input} type="email" className="form-control" id="emailInput" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input ref={(input) => this.password = input} type="password" className="form-control" id="passwordInput"  />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Repeat Password</label>
            <input ref={(input) => this.password_confirm = input} type="password" className="form-control" id="passwordInput" />
          </div>
          <button className="btn btn-primary logInBtn" type='submit'>Sign Up</button>
        </form>
      </Page.Auth>
    )
  }
}


export default New;
