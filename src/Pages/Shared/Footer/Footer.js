import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
             <div className='container-fluid full-footer'>
            <div className='row footer'>
                <div className='col-lg-4 col-md-12 col-12'>
                    <h2 >Travel Way</h2>
                    <p className='pt-3'>We aim to ensure that you never miss an opportunity to travel. People Who Work Overseas and Fly For Free.So discovering the beauty of nature by help of travelway.</p>
                </div>
                <div className='col-lg-4 col-md-12 col-12'>
                    <h3 className='text-light recognise'><span>Explore</span></h3>
                    <p className='pt-2'>Hotels Sitemap <br />
                    Flights Sitemap <br />
                    Rental Cars<br />
                    Cruises Sitemap <br />
                    Submit an Event</p>
                </div>
                <div className='col-lg-4 col-md-12 col-12'>
                    <h3 className='text-light recognise'><span>Contact Here</span></h3>
                    <div className='pt-2' >
                        <p>455.256.132.56</p>
                        <p>travelway@gmail.com</p>
                        <p>523 North Street,Dhaka</p>
                        <div >
                        </div>
                    </div>
                </div>
                <p className='pt-5'>Travelway © 2021. All Rights Reserved.</p>
            </div>

        </div>
        </div>
    );
};

export default Footer;