import React from 'react';
import './ServiceQuality.css';

const ServiceQuality = () => {
    return (
        <div className="service_quality">
            <div className="container service_quality_inner">
                <div className="service_quality_item">
                    <h3>Qualified Doctors</h3>
                    <h2>WHERE PEOPLE COME FIRST</h2>
                    <p>Qualified Physician means any medical doctor who is licensed to practice medicine in the State of Executive’s residence.</p>
                </div>
                <div className="service_quality_item">
                    <h3>24 Hour Service</h3>
                    <h2>HIGHEST QUALITY SERVICE</h2>
                    <p>If you were asked to name the world's best hospitals, you might well have mentioned the Mayo Clinic, Massachusetts General.</p>
                </div>
                <div className="service_quality_item">
                    <h3>We Are Here For You</h3>
                    <h2>EMERGENCY DEPARTMENT</h2>
                    <p>The Accident and Emergency Department of United Hospital is a 24-hour, full time section and it is the mirror of United Hospital.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceQuality;