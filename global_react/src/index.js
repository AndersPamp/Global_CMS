import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetCountryComponent from "./GetCountryComponent";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GetCountryComponent />, document.getElementById('GetCountry'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
