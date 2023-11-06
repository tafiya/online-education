import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user ,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
      //create user
      const createUser=(email,password,)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
     //sign in user..
     const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
         //signOut
         const logOut =()=>{
            setLoading(true)
            return signOut(auth);
         }

     useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user is the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
     },[auth])


    const authInfo ={
        user,
     createUser,
     loading,
     signInUser,
     logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;