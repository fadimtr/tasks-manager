var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyBRV02cccMgxeH2ycdKKwIowZ0JrfSwh7s",
    authDomain: "tasks-manager-11702.firebaseapp.com",
    databaseURL: "https://tasks-manager-11702.firebaseio.com",
    projectId: "tasks-manager-11702",
    storageBucket: "tasks-manager-11702.appspot.com",
    messagingSenderId: "919532909138"
};


var firebaseApp = firebase.initializeApp(config);

var firebaseDB = firebase.database();

firebase.auth().signInWithEmailAndPassword('fadimtr@gmail.com', 'tasksManager1').catch(function(error) {
   console.log('login failed');
    // ...
});


export default firebaseDB;