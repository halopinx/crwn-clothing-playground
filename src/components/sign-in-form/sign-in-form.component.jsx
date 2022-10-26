import {useState, useContext} from "react";
import {
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import { UserContext} from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const {setCurrentUser} = useContext(UserContext)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetSignUpFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            resetSignUpFields()
        }catch (e){
            switch(e.code){
                case 'auth/wrong-password':
                    alert('wrong password!')
                    break;
                case 'auth/user-not-found':
                    alert('no email found!')
                    break;
                default:
                    console.log(e)
            }


        }
    }

    const logGoggleUser = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    return (
        <div className='sign-up-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type="email" required onChange={handleChange} name='email' value={email}
                />
                <FormInput
                    label='Password'
                    type="password" required onChange={handleChange} name='password' value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logGoggleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;