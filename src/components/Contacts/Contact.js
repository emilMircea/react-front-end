import React from 'react';
import { Link } from 'react-router';
import './Contact.css'

import { inject, observer } from 'mobx-react';

@inject(['contacts'])
@observer class Contact extends React.Component {

  removeContact = (e) => {
    e.preventDefault();
    this.props.contacts.remove(this.props.id);
  }

  render() {
    return(
      <div id='contact-wrap' className="col-sm-4">
        <Link to={`/contacts/${this.props.id}`}>
          <h3>
            { this.props.name }
          </h3>
        </Link>

        <p><i>{this.props.email}</i></p>
        <button onClick={this.removeContact} className="btn btn-danger">Remove</button>
      </div>
    )
  }
}

export default Contact;
