import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEqds-CrM6iS6SEFQFPfk7u0TA2PrV2K4",
    authDomain: "crwn-clothing-db-81459.firebaseapp.com",
    projectId: "crwn-clothing-db-81459",
    storageBucket: "crwn-clothing-db-81459.appspot.com",
    messagingSenderId: "101893374023",
    appId: "1:101893374023:web:6c4f25296f1b574b6e3162"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);