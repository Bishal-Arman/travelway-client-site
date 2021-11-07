import { useEffect, useState } from "react"
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";

initializeAuthentication();
const useFirebase=()=>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
  
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            else {
                setUser({})
            } setIsLoading(false)

        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }

}
export default useFirebase;