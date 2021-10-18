import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(()=>{
        fetch('https://azizulwd.github.io/health-services/health-services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className="services">
            <div className="container services_inner">
                <div className="services_title">
                    <h1>HOW CAN WE HELP YOU</h1>
                    <p>On the other hand, hospitals may include a wider range of departments with more opportunities for career growth.</p>
                </div>
                <div className="services_container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;