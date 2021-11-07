import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
        <h2 className='text-info'><span>404!</span> <br /> This page is not found</h2>
        <Link to='/home'><button className='btn btn-info text-white mt-3 rounded-pill'>Back to Home</button></Link>
    </div>
    );
};

export default NotFound;