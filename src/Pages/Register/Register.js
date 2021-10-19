import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import loginLogo from '../../images/logo.png';

const Register = () => {
    const {signInWithGoogle} = useFirebase();

    return (
        <div className="form">
            <div className="form_container">
                <div className="form_logo">
                    <img src={loginLogo} alt="" />
                    <h1>Register</h1>
                </div>
                <div className="form_input_group">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn_regular">Register</button>
                    <fieldset>
                        <legend>Or</legend>
                        <button onClick={signInWithGoogle} className="btn_regular google_btn">Register with Google</button>
                    </fieldset>
                    <Link to="/login">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;