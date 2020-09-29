import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLzVY96gdUAyuWeNiNEkVSkfxZrb2J60Q",
  authDomain: "clone-webapp-c17f3.firebaseapp.com",
  databaseURL: "https://clone-webapp-c17f3.firebaseio.com",
  projectId: "clone-webapp-c17f3",
  storageBucket: "clone-webapp-c17f3.appspot.com",
  messagingSenderId: "330275950398",
  appId: "1:330275950398:web:cb2d292acfdc2ab0d7666f",
  measurementId: "G-DQEGJH70TH",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
 
  export {db, auth};