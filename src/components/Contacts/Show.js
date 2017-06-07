import React from 'react';
// import data from './data';
import { inject, observer } from 'mobx-react';
@inject(['contacts'])
@observer class Show extends React.Component {
  componentWillMount() {
    const contact = this.props.contacts.find(this.props.params.contactId);
    this.setState({contact});
  }
  render() {
    return(
      <div id="show">
        <h1>{this.state.contact.name}</h1>
        <h3><i>{this.state.contact.email}</i></h3>
      </div>
    )
  }
}

export default Show;
