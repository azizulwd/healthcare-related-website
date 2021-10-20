import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    let {serviceId} = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleServiceDetails, setSingleServiceDetails] = useState({});
    
    useEffect(()=>{
        fetch('https://azizulwd.github.io/healthService2/healthServices2.json')
        .then(res => res.json())
        .then(data => setServicesDetails(data));
    },[]);

    useEffect(()=>{
        const foundSingleService = servicesDetails.find(service => service.id === serviceId);
        setSingleServiceDetails(foundSingleService);
    },[servicesDetails]);

    return (
        <div className="single_service_details">
            <div className="container">
                <div className="single_service_inner">
                    <div className="single_service_img">
                        <img src={singleServiceDetails?.img} alt="" />
                    </div>
                    <div className="single_service_details">
                        <h1>{singleServiceDetails?.name}</h1>
                        <p>{singleServiceDetails?.description}</p>
                        <Link to="/appointment">
                            <button>Booking an Appointment</button>
                        </Link>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default ServiceDetails;