// database/firebaseDb.js

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDt4VSuySLqYsCnXJBOCfubr6csVqr1IFM",
    authDomain: "the-enabler.firebaseapp.com",
    databaseURL: "https://the-enabler.firebaseio.com",
    projectId: "the-enabler",
    storageBucket: "the-enabler.appspot.com",
    messagingSenderId: "1008419884630",
    appId: "1:1008419884630:web:d950a86aa716cb87e3b5f7",
    measurementId: "G-WHP8X8JMKP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;