import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const clientCredentials = {
  apiKey: "AIzaSyAkdkv9r-dBfYdgPU1MguiFyRlU_7wWJfQ",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "propperprep",
  storageBucket: "propperprep.appspot.com",
  messagingSenderId: "213900582608",
  appId: "1:213900582608:web:214c436a7b12c3786188d5",
  measurementId: "G-ETQ47DKCDB"
};

const app = initializeApp(clientCredentials);
const auth = getAuth(app);


export { auth };












//import firebase from 'firebase/app';
/*
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);

    }).catch((error) => {
      console.log(error);
    });
};



export { auth, signIn }

/*
if (!firebase.apps.length) {
  firebase?.initializeApp(clientCredentials);
}

export { firebase, clientCredentials };
*/
