import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../ContextApi/useAuth';

const Register = () => {
    const { googleSignIn, user, signInEmail, setError, error, setDisplayName } = useAuth();

    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInEmail(email, password)
            .then((result) => {
                const user = result.user;
                setDisplayName(name);
                console.log(user);
                setError('');
            })
            .catch((error) => {
                console.log(error)
                setError(error.massage);
            })
        console.log(name, email, password);
    }

    return (
        <div>
            <div className="login-page">
                <div>
                    <h2>Please Registration</h2>
                    <form onSubmit={handleRegister}>
                        <label htmlFor="">Name:</label>
                        <input type="text" ref={nameRef} placeholder='Enter your name' />
                        <br />
                        <br />
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
                    <button className='btn-regular' onClick={googleSignIn}>GoogleSignIn</button>
                    <br />
                    <Link to='/login'>Already Registration</Link>
                    <br />
                    <br />
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;