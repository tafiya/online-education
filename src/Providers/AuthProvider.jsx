import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
import { motion } from "framer-motion";




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
            const unSubscribe = onAuthStateChanged(auth,currentUser=>{
               const userEmail =currentUser?.email || user?.email;
               const loggedUser ={ email: userEmail};
                setUser(currentUser);
                console.log('current user',currentUser);
                setLoading(false)
                if(currentUser)
                {
                   
                    axios.post('https://online-group-study-server-rust.vercel.app/jwt',loggedUser,{withCredentials: true})
                    .then(res=>
                        {
                            console.log('tokrn response',res.data)
                        })
                }
                else
                {
                    axios.post('https://online-group-study-server-rust.vercel.app/logout',loggedUser,{withCredentials: true})
                    .then(res=>{
                        console.log(res.data);
                    }) 
                }
            });
            return ()=>{  
                return unSubscribe();
            }
        },[])


    const authInfo ={
        user,
     createUser,
     loading,
     signInUser,
     logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            <motion.dev Variants ={
                {
                    hidden:{opacity: 0,y:75},
                    visible:{opacity:1, y:0}
                }
            }
            initial="hidden"
            animate="visible"
            transition={{duration:0.5, delay:0.25}} >
            {children}
            </motion.dev>
          
        </AuthContext.Provider>
    );
};

export default AuthProvider;