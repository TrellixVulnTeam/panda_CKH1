import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./styles/styles.scss";
import { BrowserRouter, Route } from 'react-router-dom';

import { App } from './components/App';

const ROOT = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App}></Route>
  </BrowserRouter>
  , ROOT
);