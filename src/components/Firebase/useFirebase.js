import { useEffect, useState } from "react";
import app from "./firebase.init";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

app();
const useFirebase = () => {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)

    }

    const signInEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const setDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {

            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
        })
    }, [])

    const sigInOut = () => {
        return signOut(auth)
    }



    return {
        user,
        error,
        setUser,
        setError,
        googleSignIn,
        signInEmail,
        logInEmail,
        sigInOut,
        setDisplayName
    }
}
export default useFirebase;