import firebase from 'firebase';
import "firebase/auth";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyANvljWJQvDzXUeBZej39x1d0kfa-jN6Ug",
    authDomain: "login-e6349.firebaseapp.com",
    projectId: "login-e6349",
    storageBucket: "login-e6349.appspot.com",
    messagingSenderId: "1080207717088",
    appId: "1:1080207717088:web:fccf71f22f71d2858d5685",
    databaseURL: "https://login-e6349-default-rtdb.firebaseio.com/"
  };
  // Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

export const auth = firebase.auth();
export const db = firebase.database();
