import SignUp from "../../components/sign-up-form/sign-up.component";
import SignIn from "../../components/sign-in-form/sign-in.component";
import "./authetication.styles.scss"

const Authetication = () => {

    // useEffect(
    //     () => async () => {
    //       const response = await getRedirectResult(auth);
    //       if(response){
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //       }
    //     },
    //     []
    //   );


   return(
    <div className="auth-container">
    <SignIn />
    <SignUp />
    </div>


   ) 
}

export default Authetication;