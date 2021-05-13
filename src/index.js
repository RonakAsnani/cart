import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_jQGC3O_6NOhQYHPoou_1OTe6cCNDjII",
  authDomain: "cart-a4fae.firebaseapp.com",
  projectId: "cart-a4fae",
  storageBucket: "cart-a4fae.appspot.com",
  messagingSenderId: "703369410052",
  appId: "1:703369410052:web:5b511a37639fbd3f536751"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


