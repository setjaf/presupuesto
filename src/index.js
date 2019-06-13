import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase/app';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyC8Dx6f5GWM8wbBxORFRL2ky6BVlMX6jkY",
  authDomain: "misfinanzas-4edc8.firebaseapp.com",
  databaseURL: "https://misfinanzas-4edc8.firebaseio.com",
  projectId: "misfinanzas-4edc8",
  storageBucket: "misfinanzas-4edc8.appspot.com",
  messagingSenderId: "767739153344",
  appId: "1:767739153344:web:d0e2a44be39fc96d"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
