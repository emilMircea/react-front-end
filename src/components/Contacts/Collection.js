import React, { Component } from 'react';
// import logo from './logo.svg';
import './Collection.css';
// import Spinner from  './../Spinner/Spinner';
import Contact from './Contact';
import Form from './Form';

import { inject, observer } from 'mobx-react';

@inject(['contacts'])
@observer class Layout extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
  }

  componentWillMount() {
    this.props.contacts.fetchAll();
  }

  addContact(newContact) {
    this.props.contacts.add({
      name: newContact.name,
      email: newContact.email
    });
  }

  render() {
    const { all, isLoading } = this.props.contacts;
    // if (isLoading) {
    //   return <Spinner />;
    // }
    return (
      <div className="Layout container-fluid">
        <div className="row">
          <Form addContact={this.addContact} />
        </div>
        <div className="row">
          {/* iterate over data  */}
          {all.map(
              (info, index) =>
              <Contact key={index} id={index}  {...info} />
            )
          }
        </div>
        <br/>
      </div>
    );
  }
}

export default Layout;
