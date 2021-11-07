import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/image1.jpg'
import banner2 from '../../../images/banner/trsm.jpg'
import banner3 from '../../../images/banner/exp.jpg'
import'./Banner.css'


const Banner = () => {
    return (
        <div>
         <Carousel className='banner'>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>~~Travel Way~~ </h3>
      <p >Trust Our Experience.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-primary '>Discover The Colorfull World</h3>
      <p className='text-danger '>Amazing Tour And Fun.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Make Your Vacation Comfortable</h3>
      <p className='text-white'>Find Your Paradise.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;