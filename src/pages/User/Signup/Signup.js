import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Signup.css";

const Signup = () => {
    const { signInUsingGoogle, signInUsingFacebook, setName, setEmail, setPassword, setRePassword, error, registerWithEmailAndPassword } = useAuth();

    const handleDisplayName = e => {
        setName(e.target.value);
    }
    const handleEmailAddress = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleReEnterPassword = e => {
        setRePassword(e.target.value);
    }

    return (
        <>
            <div className="signup-form">
                <div className="form-border">
                    <h5 className="text-2xl font-bold mb-2">Create an account</h5>
                    <form className="mb-4" onSubmit={registerWithEmailAndPassword}>
                        <input onBlur={handleDisplayName} className="input-box placeholder-blue-300" type="text" placeholder="Your full name" />
                        <input onBlur={handleEmailAddress} className="input-box placeholder-blue-300" type="text" placeholder="Email Address" />
                        <input onBlur={handlePassword} className="input-box placeholder-blue-300" type="password" placeholder="Password" />
                        <input onBlur={handleReEnterPassword} className="input-box placeholder-blue-300" type="password" placeholder="Re-enter password" />
                        <span className="text-red-600">{error}</span>
                        <input className="input-box bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-6 rounded-md text-white font-medium shadow-md mt-6" type="submit" value="Create account" />
                    </form>
                    <span className="">Already have an account? <Link className="text-blue-700" to="/login">Login</Link></span>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <h6 className="font-semibold text-lg">or</h6>
                </div>
                <div className="text-center">
                    <button onClick={signInUsingGoogle} className="border-2 border-yellow-400 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 py-1 px-12 rounded-full py-2 px-6 text-yellow-400 hover:text-yellow-500 font-medium shadow-md"><i className="fab fa-google"></i> Continue with Google</button>
                    <br />
                    <button onClick={signInUsingFacebook} className="border-2 border-indigo-500 hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 py-1 px-10 rounded-full py-2 px-6 text-indigo-500 hover:text-indigo-600 font-medium shadow-md my-2"><i className="fab fa-facebook"></i> Continue with Facebook</button>
                </div>
            </div>
        </>
    );
};

export default Signup;