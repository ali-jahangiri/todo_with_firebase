import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAii7UvlAm3icPYIEqyXV9tYo6MP4k960c",
  authDomain: "todo-app-c5c1b.firebaseapp.com",
  projectId: "todo-app-c5c1b",
  storageBucket: "todo-app-c5c1b.appspot.com",
  messagingSenderId: "202616829486",
  appId: "1:202616829486:web:3fd9869ecf4756962cd1bf",
});

const db = firebaseApp.firestore();

export default db;
