import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth,signInWidthGooglePopup, createUserDocFromAuth, signInWidthGoogleRedirect } from "../../utilites/firebase/firebase.utils";
import { async } from "@firebase/util";
import SignUp from "../../components/sign-up-form/sign-up.component";

const SignIn = () => {

    // useEffect(
    //     () => async () => {
    //       const response = await getRedirectResult(auth);
    //       if(response){
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //       }
    //     },
    //     []
    //   );

const logGoogleUser = async () => {
    const {user} = await signInWidthGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
}
   return(
    <>
    <div>Sign in</div>
<button onClick={logGoogleUser}>Sign in with google promt</button>
{/* <button onClick={signInWidthGoogleRedirect}>Sign in with google redirecy</button> */}
<SignUp />
    </>

   ) 
}

export default SignIn;