import { useState} from "react"
import FormInput from "../form-input/form-input.component"
import {signInUserWithEmailAndPassword, createUserDocFromAuth, signInWidthGooglePopup} from "../../utilites/firebase/firebase.utils"
import Button from "../button/button.component"
import "./sign-in.styles.scss"

const defaultFormFieds = {
    email: '',
    password: '',
   }


const SignIn = () => {

  const [formFields, setFormFields] = useState(defaultFormFieds);
  const {email, password} = formFields;


const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
}
const resetFormFields = () => {
    setFormFields(defaultFormFieds);
}
const signInWidthGooge = async () => {
    const res = await signInWidthGooglePopup();
    // const userDocRef = await createUserDocFromAuth(res.user);// MOVED TO CONTEXT
}
const handeleSubmit = async(event) => {
    event.preventDefault();

        try{
            const {user} = await signInUserWithEmailAndPassword(email, password);
            resetFormFields();
           }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorect password for email");
                    break;
                case "auth/user-not-found" :
                    alert("email not foud");
                    break;
                    default:
                        console.log(error)
            }
           }
   
}
    return(
        <div className="sign-in-container">
        <h2> I already have an account </h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handeleSubmit}>
        <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email}/>
        <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password}/>
        <div className="buttons-wrapper">
        <Button  type="submit">Sign in</Button>
        <Button type="button" buttonType={'google'} onClick={signInWidthGooge}>Google sign in</Button>
        </div>
 
    </form>
    </div>
    )
}

export default SignIn;