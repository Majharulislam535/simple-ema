import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../ContextApi/useAuth';

const Login = () => {
    const { googleSignIn, logInEmail, setError } = useAuth();
    let navigate = useNavigate();
    const { state } = useLocation();

    const passwordRef = useRef();
    const emailRef = useRef();
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        logInEmail(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                setError('');
            })
            .catch((error) => {
                console.log(error)
                setError(error.massage);
            })

    }

    const handleGoogleLogin = (e) => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate(state?.path || "/placeOrder");
                setError('');
            })
            .catch((error) => {
                setError(error.massage)
            })
    }
    return (
        <div>
            <div className="login-page">
                <div>
                    <h2>Please Login</h2>
                    <form onSubmit={handleLogIn}>
                        <label htmlFor="">E-amil :</label>
                        <input type="email" ref={emailRef} placeholder='enter your email' />
                        <br />
                        <br />
                        <label htmlFor="">Password :</label>
                        <input type="password" ref={passwordRef} placeholder='enter your password' />
                        <br />
                        <br />
                        <button className='btn-regular'>Submit</button>
                    </form>
                    <p>-------or--------</p>
                    <button onClick={handleGoogleLogin} className='btn-regular'>GoogleSignIn</button>
                    <br />
                    <Link to='/register'>New user</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;