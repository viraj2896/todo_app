

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp ({

    apiKey: "AIzaSyDYZeKnwRTm_AA4l3mC6CcE5xMErUPJGpk",
    authDomain: "todo-app-66ce9.firebaseapp.com",
    databaseURL: "https://todo-app-66ce9.firebaseio.com",
    projectId: "todo-app-66ce9",
    storageBucket: "todo-app-66ce9.appspot.com",
    messagingSenderId: "715830835685",
    appId: "1:715830835685:web:8ede222958da71f474570c",
    measurementId: "G-DB6GYVL5XM"

  });

  const db = firebaseApp.firestore();

  export default db;