import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
const SignIn = () => {
    const logGoggleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            This is Sign In Page.
            <button onClick={logGoggleUser}>Sign In Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;