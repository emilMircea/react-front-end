import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// import 'bootstrap/dist/css/bootstrap-flex.min.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';



import { Provider } from 'mobx-react';
import routes from './routes';
import stores from './stores';


ReactDOM.render(
  <Provider {...stores}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
