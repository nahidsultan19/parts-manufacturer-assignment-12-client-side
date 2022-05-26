import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Discount from './Discount';
import Parts from './Parts';
import Reviews from './Reviews';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummery />
            <Discount />
            <Shop />
            <Reviews />
        </div>
    );
};

export default Home;