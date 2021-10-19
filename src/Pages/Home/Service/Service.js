import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id, img, name, shortDesc} = props.service;
    
    return (
        <div className="service">
            <div className="service_img">
                <img src={img} alt="" />
            </div>
            <div className="service_details">
                <h3>{name}</h3>
                <p>{shortDesc}</p>
                <Link to={`/services/${id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;