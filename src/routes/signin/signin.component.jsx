import {useEffect} from "react";
import { getRedirectResult } from 'firebase/auth'
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    useEffect(() => {
        const loadUsersData = async () => {
            const response = await getRedirectResult(auth);
            if (response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        loadUsersData();
    }, [])

    const logGoggleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            This is Sign In Page.

            <button onClick={logGoggleUser}>Sign In Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In Google Redirect</button>
        </div>
    )
}

export default SignIn;