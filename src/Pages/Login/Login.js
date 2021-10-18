import React from 'react';
import './Login.css';
import loginLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
                    <img src={loginLogo} alt="" />
                    <h2>HealthCare</h2>
                </div>
                <div className="login_form">
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