import React from 'react';
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://warm-shelf-43613.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='pt-5'>
            <h1 className='text-primary fs-1'>%Our Offering%</h1>
            <p className='text-success fs-5 pt-3'>All Journeys Have Secret Destinations Of Which The Traveler Is Unaware.</p>

            <Row xs={1} md={2} lg={3} className="gx-4 mx-auto mt-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>



        </div>
    );
};

export default Services;