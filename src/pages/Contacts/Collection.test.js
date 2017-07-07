import React from 'react';
import ReactDOM from 'react-dom';
import {Collection} from './Collection';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Collection />, div);
// });


describe('Collection', () => {
  it('adds new contacts', () => {
    const coll = new Collection();
    coll.addContact('me', 'me@gmail.com');
    expect (coll.contacts.length).toBe(1)
    expect (coll.contacts[0].name.value).toBe('me');
  });
});
