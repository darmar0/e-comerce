import {createContext, useState, useEffect} from "react"
import {onAuthStateChangedListener, createUserDocFromAuth} from"../utilites/firebase/firebase.utils"


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=> {
        const unsabscribe = onAuthStateChangedListener(async(user)=>{ // LISTENING AUTH STATE CHANGE
            if(user){
             await createUserDocFromAuth(user); //GOOGLE SIGN IN
            }
            setCurrentUser(user); 
        }); 
        return unsabscribe;
    }, [])
return(
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
)
}