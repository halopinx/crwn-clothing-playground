import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log('userDocRef', userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log('userSnapshot', userSnapshot, userSnapshot.exists())

    if (!userSnapshot.exists()){
        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch (e){
            console.log('error creating the user', e.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password ) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}