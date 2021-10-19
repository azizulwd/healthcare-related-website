import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div className="header">
            <div className="container header_inner">
                <div className="logo">
                    <Link to="/home">
                        <img src={logo} alt="" />
                        <h2>HealthCare</h2>
                    </Link>
                </div>
                <div className="navigation_menu">
                    <Link to="/home">Home</Link>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/blog">Blog</Link>
                    <span>{user?.displayName}</span>
                    {user.email ? <button className="logout_btn" onClick={logOut}>Logout</button> : <Link to="/login">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;