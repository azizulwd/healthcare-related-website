import React from 'react';
import './Footer.css';
import addressLogo from '../../../images/address.png';
import phoneLogo from '../../../images/phone.png';
import clockLogo from '../../../images/clock.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_inner">
                <div className="footer_item">
                    <h2>Our Contacts</h2>
                    <ul className="emergnecy_contact">
                        <li>
                            <img src={addressLogo} alt="" />
                            <p>23 Divison, Shantinagar, <br /> Dhaka-1215</p>
                        </li>
                        <li>
                            <img src={phoneLogo} alt="" />
                            <p>Call Us 24/7 <br /> ++880174592030</p>
                        </li>
                        <li>
                            <img src={clockLogo} alt="" />
                            <p>Sun-Thu: 09:00 - 12:00 <br /> Sat-Sun: 09:00 - 12:00</p>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h2>Open Hours</h2>
                    <ul className="appointment_time">
                        <li>
                            <span>Sunday</span>
                            <span>09:00 - 12:00</span>
                        </li>
                        <li>
                            <span>Monday</span>
                            <span>09:00 - 12:00</span>
                        </li>
                        <li>
                            <span>Tuesday</span>
                            <span>09:00 - 12:00</span>
                        </li>
                        <li>
                            <span>Wednesday</span>
                            <span>09:00 - 12:00</span>
                        </li>
                        <li>
                            <span>Thursday</span>
                            <span>09:00 - 12:00</span>
                        </li>
                        <li>
                            <span>Saturday</span>
                            <span>09:00 - 12:00</span>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h2>Daily Newsleter</h2>
                    <div className="subscribe">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="container copyright_text">
                <p>All rights Reserved by &copy; HealthCare</p>
                <div className="footer_links">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/shop">Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;