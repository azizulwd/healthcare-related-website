import React from 'react';
import './Specialist.css';
import doctor1 from '../../../images/doctor-1.jpg';
import doctor2 from '../../../images/doctor-2.jpg';
import doctor3 from '../../../images/doctor-3.jpg';
import doctor4 from '../../../images/doctor-4.jpg';
import { Link } from 'react-router-dom';

const Specialist = () => {
    return (
        <div className="specialist">
            <div className="container meet_our_specialist">
                <div className="specialist_title">
                    <h1>MEET OUR SPECIALIST</h1>
                    <p>Clinical excellence must be the priority for any health care service provider. HEALTHCARE Hospital ensures the best healthcare service comprise.</p>
                </div>
                <div className="doctor_container">
                    <div className="doctor">
                        <img src={doctor1} alt="" />
                        <Link to="/">Dr Donald Cox</Link>
                        <h4>NEUROLOGIST</h4>
                    </div>
                    <div className="doctor">
                        <img src={doctor2} alt="" />
                        <Link to="/">Dr Catherina Langford</Link>
                        <h4>ANESTHESIOLOGIST</h4>
                    </div>
                    <div className="doctor">
                        <img src={doctor3} alt="" />
                        <Link to="/">Dr Watson</Link>
                        <h4>GYNECOLOGIST</h4>
                    </div>
                    <div className="doctor">
                        <img src={doctor4} alt="" />
                        <Link to="/">Dr John Smith</Link>
                        <h4>DENTAL EXPERT</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialist;