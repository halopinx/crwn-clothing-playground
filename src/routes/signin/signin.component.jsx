import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    const logGoggleUser = async () => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    return (
        <div>
            This is Sign In Page.

            <button onClick={logGoggleUser}>Sign In</button>
        </div>
    )
}

export default SignIn;