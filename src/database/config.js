import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCBhuit5oURnCBg8Y4PwXgqQ325osSxddg",
    authDomain: "photowall-b3f96.firebaseapp.com",
    databaseURL: "https://photowall-b3f96-default-rtdb.firebaseio.com",
    projectId: "photowall-b3f96",
    storageBucket: "photowall-b3f96.appspot.com",
    messagingSenderId: "562535003281",
    appId: "1:562535003281:web:af0c1695ac675639a9bb30",
    measurementId: "G-86D0HMKV27"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database()
export {database}