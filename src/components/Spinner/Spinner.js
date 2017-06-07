import React from 'react';
import spinner from './puff.svg'
import spinnerStyle from './spinner-style.css'

const Spinner = props =>
  <div className='pos-center'>
    <img src={spinner} alt=""/>
  </div>


export default Spinner;
