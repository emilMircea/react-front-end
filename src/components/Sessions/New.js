import React from 'react';
import { observer, inject } from 'mobx-react';
import './New.css';

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
    return(
      <div className="container">
        <div className="row signIn-wrap">
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
        </div>
      </div>
    )
  }
}

export default New ;
