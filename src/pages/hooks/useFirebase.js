import { useEffect, useState } from "react";
import { GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
            .catch(error => setError(error.message));
    }

    const registerWithEmailAndPassword = e => {
        e.preventDefault();
        if (password === rePassword) {
            return createUserWithEmailAndPassword(auth, email, password);
        }
        else {
            setError('Password does not matched!');
        }
    }

    const signInExistingUser = e => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, [])

    const signingOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        setName,
        setEmail,
        setError,
        setPassword,
        setRePassword,
        isLoading,
        setIsLoading,
        updateDisplayName,
        signInUsingGoogle,
        signInUsingFacebook,
        registerWithEmailAndPassword,
        signInExistingUser,
        signingOut
    }
}

export default useFirebase;