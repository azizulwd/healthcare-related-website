import React from 'react';
import './Service.css';

const Service = (props) => {
    console.log(props.service);
    const {img, name, shortDesc} = props.service;
    
    return (
        <div className="service">
            <div className="service_img">
                <img src={img} alt="" />
            </div>
            <div className="service_details">
                <h3>{name}</h3>
                <p>{shortDesc}</p>
                <button>Read More</button>
            </div>
        </div>
    );
};

export default Service;