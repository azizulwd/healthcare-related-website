import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;