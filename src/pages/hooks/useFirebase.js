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

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
                setError(error.message);
            });
    }

    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
            .catch(error => setError(error.message));
    }

    const registerWithEmailAndPassword = e => {
        e.preventDefault();
        if (password === rePassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    updateDisplayName();
                    setUser(result.user);
                    window.location.reload();
                })
                .catch(error => setError(error.message));
        }
        else {
            setError('Password does not matched!');
        }
    }

    const signInExistingUser = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
            })
            .catch(error => setError(error.message));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    const signingOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => setError(error.message));
    }

    return {
        user,
        error,
        setName,
        setEmail,
        setPassword,
        setRePassword,
        signInUsingGoogle,
        signInUsingFacebook,
        registerWithEmailAndPassword,
        signInExistingUser,
        signingOut
    }
}

export default useFirebase;