import React from 'react';
import image1 from '../../../images/tourism/london.jpg'
import image2 from '../../../images/tourism/Newyork.jpg'
import image3 from '../../../images/tourism/paris.jpg'

import './Reasons.css'

const Reasons = () => {
    return (
        <div className=' my-5 py-5 jk '>
        <h3 className='text-primary'>!!!Top Locations!!!</h3>
        <h3 className='text-info capabilities mb-5'>Every Day Is A Journey, And The Journey Itself Is Home.</h3>

        <div className='container reason'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-12'>
                    <img className='img-fluid' src={image1} alt="" />
                    <h2>London</h2>
                    <p className='text-primary' >At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.</p>
                </div>
                <div className='col-lg-4 col-md-12 col-12'>
                    <img className='img-fluid' src={image2} alt="" />
                    <h2>New York </h2>
                    <p className='text-primary'>At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
                </div>
                <div className='col-lg-4 col-md-12 col-12'>
                    <img className='img-fluid' src={image3} alt="" />
                    <h2>Paris</h2>
                    <p className='text-primary'>Eiffel Tower and Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honore.</p>
                </div>

            </div>

        </div>
    </div>
    );
};

export default Reasons;