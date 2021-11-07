import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Reasons from '../Reasons/Reasons';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Reasons></Reasons>
        </div>
    );
};

export default Home;