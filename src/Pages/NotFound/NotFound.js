import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFoundPage">
            <div>
                <h1 className="text-center notFoundtext">404</h1>
                <h2 className="fw-bold text-center mb-4">OPPS! THE PAGE NOT FOUND</h2>
                <p className="text-center fs-3">Sorry, the page you're looking for doesn't exist. If you think <br/> something is broken, report a problem.</p>
                <div className="returnHome_btn mt-5">
                    <Link to="/home">RETURN HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;