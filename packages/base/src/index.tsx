import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "./styles/styles.scss";
// import "cesium/Widgets/widgets.css";
import '/node_modules/cesium/Build/CesiumUnminified/Widgets/widgets.css';

import { App } from './components/App';

const ROOT = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App}></Route>
  </BrowserRouter>
  , ROOT
);