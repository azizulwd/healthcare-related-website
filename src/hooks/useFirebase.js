import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        });
    }

    // Form related funcitonality start
    const handleRegistration = event =>{
        event.preventDefault();

        if(password.length < 6){
            setError("Password must have at least 6 character");
            return;
          }
    
          if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError("Password must have at least two Uppercase Character");
            return;
          }
    
          if(isLogin){
            processLogin(email, password);
          }
          else{
            registerNewUser(email, password);
          }
    }


    const handleEmail = event =>{
        setEmail(event.target.value);
      }
    
      const handlePassword = event =>{
        setPassword(event.target.value);
      }
    
      const toggleLogin = event =>{
        setIsLogin(event.target.checked);
      }


    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          setError('');
        })
        .catch(error =>{
          setError(error.message);
        });
      }
    
      const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
          .then(result =>{
              const user = result.user;
              setError('');
              verifyEmail();
          })
          .catch(error =>{
              setError(error.message);
          });
      }

      const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
          console.log(result);
        })
      }

      const resetPasswordEmail = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{
          console.log(result);
        })
      }

// Form related funcitonality end

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
        email,
        password,
        error,
        isLogin,
        signInWithGoogle,
        logOut,
        handleRegistration,
        handleEmail,
        handlePassword,
        toggleLogin,
        resetPasswordEmail
    }
}

export default useFirebase;