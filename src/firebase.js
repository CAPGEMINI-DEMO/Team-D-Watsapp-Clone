import firebase from "firebase"

const firebaseConfig = {
    //place your firebase config here
    apiKey: "AIzaSyBszFwmWsbaD3ufSJmWELhrSr8RIFmBvHA",
    authDomain: "chit-chat-c4817.firebaseapp.com",
    projectId: "chit-chat-c4817",
    storageBucket: "chit-chat-c4817.appspot.com",
    messagingSenderId: "1056473561792",
    appId: "1:1056473561792:web:3e3b0e15a2cbf8a735cb25",
    measurementId: "G-9EZFJMRPQQ"
  };

//this special line of code connects everything
const firebaseApp =  firebase.initializeApp(firebaseConfig);


//this is for database connection
const db = firebaseApp.firestore();


const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;
