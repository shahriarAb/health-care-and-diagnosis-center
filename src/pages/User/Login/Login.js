import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { setEmail, setPassword, signInExistingUser, error, setIsLoading, signInUsingGoogle, signInUsingFacebook, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(() => {
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleFacebookSignin = () => {
        signInUsingFacebook()
            .then(() => {
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleExistingUserLogin = e => {
        e.preventDefault();
        signInExistingUser()
            .then(() => {
                setError('');
                history.push(redirect_uri)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    const handleEmailAddress = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="signup-form">
                <div className="form-border">
                    <h4 className="text-2xl font-bold mb-2">Login</h4>
                    <form className="my-4" onSubmit={handleExistingUserLogin}>
                        <input onBlur={handleEmailAddress} className="input-box placeholder-blue-300" type="text" placeholder="Email Address" />
                        <input onBlur={handlePassword} className="input-box placeholder-blue-300" type="password" placeholder="Password" />
                        <div>
                            <input className="mt-2" type="checkbox" id="remember" />
                            <label className="ml-1" htmlFor="remember">Remember me</label>
                        </div>
                        <span className="text-red-600">{error}</span>
                        <input className="input-box bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-6 rounded-md text-white font-medium shadow-md mt-6" type="submit" value="Login" />
                    </form>
                    <span>Don't have an account? <Link className="text-blue-700" to="/signup">Create an account</Link></span>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <h6 className="font-semibold text-lg">or</h6>
                </div>
                <div className="text-center">
                    <button onClick={handleGoogleSignin} className="border-2 border-yellow-400 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 py-1 px-12 rounded-full py-2 px-6 text-yellow-400 hover:text-yellow-500 font-medium shadow-md"><i className="fab fa-google"></i> Continue with Google</button>
                    <br />
                    <button onClick={handleFacebookSignin} className="border-2 border-indigo-500 hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 py-1 px-10 rounded-full py-2 px-6 text-indigo-500 hover:text-indigo-600 font-medium shadow-md my-2"><i className="fab fa-facebook"></i> Continue with Facebook</button>
                </div>
            </div>
        </>
    );
};

export default Login;