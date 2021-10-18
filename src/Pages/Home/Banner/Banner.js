import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner.jpg';

const Banner = () => {

    const bannerImgStyle = {
        width: '100%',
        height: '500px',
        backgroundImage: `url(${bannerImg})`
    }

    return (
        <div className="banner" style={bannerImgStyle}>
            <div className="banner_inner">
                <div>
                    <h1>THE BEST DOCTOR</h1>
                    <p>The good news: a healthy lifestyle can help you feel better. Even better, you don’t have to overhaul your entire life overnight. It’s pretty easy to make a couple of small changes that can steer you in the direction of improved well-being.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;