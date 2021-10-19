import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        });
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    }, []);

    return{
        user,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;