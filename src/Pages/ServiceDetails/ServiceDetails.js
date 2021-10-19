import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    let {serviceId} = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    
    useEffect(()=>{
        fetch('https://azizulwd.github.io/health-services/health-services.json')
        .then(res => res.json())
        .then(data => setServicesDetails(data));
    },[]);

    useEffect(()=>{
        const foundSingleService = servicesDetails.find(service => service.id === serviceId)
        console.log(foundSingleService);
    },[servicesDetails]);

    return (
        <div>
            <h1>Service Details: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;