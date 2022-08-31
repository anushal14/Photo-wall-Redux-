import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
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

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
export {database}