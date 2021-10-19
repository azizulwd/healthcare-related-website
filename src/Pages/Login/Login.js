import React from 'react';
import './Login.css';
import loginLogo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {user, signInWithGoogle, handleRegistration, toggleLogin, isLogin, handleEmail, handlePassword, resetPasswordEmail} = useAuth();

    return (
        <div>
            {!user.displayName ?
            <div className="form">
                <div className="form_container">
                    <div className="form_logo">
                        <img src={loginLogo} alt="" />
                        <h1>{isLogin ? 'Login' : 'Register'}</h1>
                    </div>
                    <form onSubmit={handleRegistration} className="form_input_group">
                        <input onBlur={handleEmail} type="text" placeholder="Email" />
                        <input onBlur={handlePassword} type="password" placeholder="Password" />
                        <input onChange={toggleLogin} type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox"> Already have an account?</label>
                        <button className="btn_regular">{isLogin ? 'Login' : 'Register'}</button>
                        <button onClick={resetPasswordEmail} className="btn_regular">Reset Password</button>
                        <fieldset>
                            <legend>Or</legend>
                            <button onClick={signInWithGoogle} className="btn_regular google_btn">{isLogin ? 'Login' : 'Register'} with Google</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
            :
            <div className="form">
                <div className="form_container">
                    <div className="form_logo">
                        <img src={loginLogo} alt="" />
                        <h1>{isLogin ? 'Login' : 'Register'}</h1>
                    </div>
                    <form onSubmit={handleRegistration} className="form_input_group">
                        <input onBlur={handleEmail} type="text" placeholder="Email" />
                        <input onBlur={handlePassword} type="password" placeholder="Password" />
                        <input onChange={toggleLogin} type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox"> Already have an account?</label>
                        <button className="btn_regular">{isLogin ? 'Login' : 'Register'}</button>
                        <button onClick={resetPasswordEmail} className="btn_regular">Reset Password</button>
                        <fieldset>
                            <legend>Or</legend>
                            <button onClick={signInWithGoogle} className="btn_regular google_btn">{isLogin ? 'Login' : 'Register'} with Google</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
          }
        </div>
    );
};

export default Login;