import { observable, action  } from 'mobx';
import { browserHistory } from 'react-router';
import Api from './../../v1-api/index';

class User {

  sessions = '/sessions';

  @observable isLoading = false;
  @observable signedIn = false;
  @observable email = null;


  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action setSignedIn(status, email) {
    this.signedIn = status;
    if (status && email) {
      this.email = email;
    }
  }


  signIn(email = null, password = null) {
    const store = {
      authentication_token: localStorage.getItem('token'),
      email: localStorage.getItem('email')
    }
    // check localStorage for auth credentials
    if (store.email && store.authentication_token) {
      this.signInFromStorage(store.email);
    }
    else if (email && password) {
      this.createSession(email, password);
    } else {
      this.signOut();
    }
  }

  @action async signInFromStorage(email) {

    const response = await Api.get(this.sessions);
    const status = await response.status;

    if (status === 200) {
      this.email = email;
      this.signedIn = true;
      this.isLoading = false;
    }
    else {
      // clear out the local storage data
      this.localStorage.removeItem('email');
      this.localStorage.removeItem('token');
      // set all to null so user can login again
      this.email = null;
      this.signedIn = false;
      this.isLoading = false;
      // redirect to login page
      browserHistory.push('/users/sign_in')
    }
  }


  async createSession(email, password) {
    this.setIsLoading(true);

    const response = await Api.post(
      this.sessions,
      {email, password}
    );

    const status = await response.status;

    if (status === 201) {
      const body = await response.json();
      const { user } = body.data;
      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);
      this.setSignedIn(true, user.email);

      browserHistory.push('/');
    } else {
      console.log('error');
    }
  }

  async destroySession() {
    this.setIsLoading(true);

    const response = await Api.delete(this.sessions);
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      this.signOut();
    }
  }

  @action signOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.email = null;
    this.signedIn = false;
    this.isLoading = false;
    browserHistory.push('/users/sign_in');
  }

} // end user class

export default new User();
