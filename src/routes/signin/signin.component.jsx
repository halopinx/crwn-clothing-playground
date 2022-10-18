import { signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    const logGoggleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <div>
            This is Sign In Page.

            <button onClick={logGoggleUser}>Sign In</button>
        </div>
    )
}

export default SignIn;