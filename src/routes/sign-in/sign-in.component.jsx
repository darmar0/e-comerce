import { signInWidthGooglePopup, createUserDocFromAuth } from "../../utilites/firebase/firebase.utils";

const SignIn = () => {
const logGoogleUser = async () => {
    const {user} = await signInWidthGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
}

   return(
    <>
    <div>Sign in</div>
<button onClick={logGoogleUser}>Sign in with google</button>
    </>

   ) 
}

export default SignIn;