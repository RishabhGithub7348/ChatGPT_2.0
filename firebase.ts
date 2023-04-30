import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA9c4g_kcIhOSs3kppNyZoK97-5LjNMKI",
    authDomain: "gpt-messenger-38a41.firebaseapp.com",
    projectId: "gpt-messenger-38a41",
    storageBucket: "gpt-messenger-38a41.appspot.com",
    messagingSenderId: "176991964651",
    appId: "1:176991964651:web:7b16797f1fe94ad1561dae"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app);

    export {db};