import React from 'react';
import './Layout.css';
import { observer, inject } from 'mobx-react';
import Member from './Member';
import Guest from './Guest';

@inject('user') @observer
class Application extends React.Component{
  componentWillMount() {
    // detect credentials in localStorage for signIn
    this.props.user.signIn();
  }


  guestOrMemeber() {
    const { user } = this.props;
    if (user.signedIn) {
      return <Member />
    }
    return <Guest />
  }
  render() {
    return(
      <div id="Layout">
        {/* navbar */}
        {this.guestOrMemeber()}
        {/* components */}
        {this.props.children}
      </div>
    );
  }
}

export default Application ;
