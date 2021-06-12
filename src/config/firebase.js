/* eslint-disable no-restricted-globals */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDzI-menMPUshz430eeExkHYPU5Xrr5P6c",
  authDomain: "sohochorrkm.firebaseapp.com",
  projectId: "sohochorrkm",
  storageBucket: "sohochorrkm.appspot.com",
  messagingSenderId: "51520587895",
  appId: "1:51520587895:web:4ddd456c133fbc42111e72",
  measurementId: "G-376MQESTST",
};

const env = "prod"; //dev/ prod
let firebaseApp;
let db;
let storage;

if (env === "prod") {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  db = firebaseApp.firestore();
  storage = firebase.storage().ref();
} else if (env === "dev") {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  if (location.hostname === "localhost") {
    db.useEmulator("localhost", 8080);
  }
}

export { db, storage };
