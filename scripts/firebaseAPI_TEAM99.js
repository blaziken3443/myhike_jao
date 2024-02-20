//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDhIiJ5SAOyD7dZfmxNnNjsa4ANfo-KZz8",
    authDomain: "comp1800-202410-demo-ad8cd.firebaseapp.com",
    projectId: "comp1800-202410-demo-ad8cd",
    storageBucket: "comp1800-202410-demo-ad8cd.appspot.com",
    messagingSenderId: "877701494127",
    appId: "1:877701494127:web:9d6fd1a619bc4bbcf3a49a"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
