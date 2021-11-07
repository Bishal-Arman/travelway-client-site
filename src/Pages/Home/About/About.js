import React from 'react';
import image from '../../../images/tourism/tourism.jpg'
import './About.css'

const About = () => {
  return (
    <div className='About my-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-12 pt-5">
            <h2>Welcome to Our <span>`Travel Way`</span></h2>
            <h3>Trending, Best Selling Tours And Fun Destinations</h3>
            <p className='text-primary'>Enjoy the tour of TravelWay.We provide travelers with an authentic Jordanian experience that they can remember for the rest of their lives. </p>
          </div>
          <div className="col-lg-6 col-12 col-md-12 pt-2">
            <div >
              <img className='img-fluid' src={image} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default About;