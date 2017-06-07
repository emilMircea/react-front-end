import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.createContact = this.createContact.bind(this);
  }

  createContact(e) {
    e.preventDefault();
    // get values
    const newContact = {
      name: this.name.value,
      email: this.email.value
    };
    this.props.addContact(newContact);
    // empty inputs after submit
    this.contactForm.reset();
    //update the data array with another object
  }

  render() {
    return (
      <form ref={ (input) => this.contactForm = input } className="form-inline" onSubmit={this.createContact}>
        <div className="col-sm-4">
          <label className="sr-only" htmlFor="inlineFormInput">Name</label>
          <input ref={(input) => { this.name = input }} type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe" />
        </div>
        <div className="col-sm-4">
          <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <div className="input-group-addon">@</div>
            <input ref={ (input) => {this.email = input} } type="text" className="form-control" id="inlineFormInputGroup" placeholder="email" />
          </div>
        </div>
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default Form;
