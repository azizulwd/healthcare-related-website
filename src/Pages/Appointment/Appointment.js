import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="appointment_inner">
                <div className="appointment_title">
                    <h1>Book Appointment</h1>
                </div>
                <div className="appointment_form">
                    <div className="patien_info">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Mobile Number" />
                        <input type="text" placeholder="Your Email" />
                        <input type="text" placeholder="Appointment Date" />
                    </div>
                    <div className="patien_address">
                        <div className="patien_address_title">
                            <h3>Address Details</h3>
                        </div>
                        <div className="address">
                            <input type="text" placeholder="Enter Area" />
                            <input type="text" placeholder="Enter City" />
                            <input type="text" placeholder="Enter State" />
                            <input type="text" placeholder="Enter Code" />
                            <button className="btn_regular">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;