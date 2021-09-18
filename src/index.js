import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from 'firebase/compat/app';
// import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyB3u8eZU_XqJ9c3nZL3oU3rEReEVltulYI",
  authDomain: "greenerme2021.firebaseapp.com",
  projectId: "greenerme2021",
  storageBucket: "greenerme2021.appspot.com",
  messagingSenderId: "910658120246",
  appId: "1:910658120246:web:4af8f754ce389c4ad50697",
  measurementId: "G-0PHQ9RBQ6F"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);