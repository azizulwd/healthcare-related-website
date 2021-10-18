import React from 'react';
import './Login.css';
import loginLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="form">
            <div className="form_container">
                <div className="form_logo">
                    <img src={loginLogo} alt="" />
                    <h1>Login</h1>
                </div>
                <div className="form_input_group">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn_regular">Login</button>
                    <fieldset>
                        <legend>Or</legend>
                        <button className="btn_regular google_btn">Login with Google</button>
                    </fieldset>
                    <Link to="/register">New user? Create an Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;