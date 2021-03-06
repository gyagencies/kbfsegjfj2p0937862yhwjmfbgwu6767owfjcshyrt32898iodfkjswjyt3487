import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import './css/mobile.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const routes =  (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
