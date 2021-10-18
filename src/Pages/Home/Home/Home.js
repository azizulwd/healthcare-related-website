import React from 'react';
import Banner from '../Banner/Banner';
import ServiceQuality from '../ServiceQuality/ServiceQuality';
import Services from '../Services/Services';
import Specialist from '../Specialist/Specialist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceQuality></ServiceQuality>
            <Services></Services>
            <Specialist></Specialist>
        </div>
    );
};

export default Home;